import { defineConfig,loadEnv } from 'vite'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import EnvironmentPlugin from 'vite-plugin-environment'
import vue from '@vitejs/plugin-vue'
import VueSourceLoader from './plugins/vite-plugin-vue-source-loader';

// https://vitejs.dev/config/

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    publicDir: "public",
    base: mode !== 'serve' ? `/${env.PROD_PREFIX}` : "/",
    resolve: {
      alias: {
        "normalize-wheel-es": "normalize-wheel-es/dist/index.mjs",
        "async-validator": "async-validator/dist-web/index.js",
        "@": path.resolve(__dirname, "src"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
      }
    },
    plugins: [
      EnvironmentPlugin([
        'PROD_PREFIX',
      ]),
      Components({
        resolvers: [
          (name) => {
            if (name.startsWith('Hl'))
              return { importName: name, path: 'hongluan-ui' }
          }
        ]
      }),
      {
        ...VueSourceLoader(),
        enforce:'pre'
      },
      vue()],
    build: {
      outDir: 'dist',
      assetsDir: "./static",
      brotliSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
    }
  }
})