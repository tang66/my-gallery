export default function VueSourceLoader() {
  return {
    name: 'vite-plugin-vue-source-loader', // 插件名称 必须的，将会在 warning 和 error 中显示
    // vite 独有的钩子
    enforce: 'pre', // post pre比post先执行
    // apply:'build',//或者函数，仅在build或serve模式时调用
    config(config, { command }) {
      // 可以在 vite 被解析之前修改 vite 的相关配置。钩子接收原始用户配置 config 和一个描述配置环境的变量env
    },
    configResolved(resolvedConfig) {
      // 在解析 vite 配置后调用。使用这个钩子读取和存储最终解析的配置。当插件需要根据运行的命令做一些不同的事情时，它很有用
    },
    configureServer(server) {
      // 主要用来配置开发服务器，为 dev-server (connect 应用程序) 添加自定义的中间件
    },
    transformIndexHtml(html) {
      // 转换 index.html 的专用钩子。钩子接收当前的 HTML 字符串和转换上下文
    },
    handleHotUpdate(ctx) {
      // 执行自定义HMR更新，可以通过ws往客户端发送自定义的事件
    },
    //  vite 与 rollup 的通用钩子之构建阶段
    options(options) {
      // 在服务器启动时被调用：获取、操纵Rollup选项，严格意义上来讲，它执行于属于构建阶段之前
    },
    buildStart(options){
      // 在每次开始构建时调用
    },
    resolveId(source, importer, options){
      // 在每个传入模块请求时被调用，创建自定义确认函数，可以用来定位第三方依赖；
    },
    load(id) {
      // 在每个传入模块请求时被调用，可以自定义加载器，可用来返回自定义的内容
    },
    transform(src,id) {
      // 在每个传入模块请求时被调用，主要是用来转换单个模块
    },
    buildEnd(error?:Error) {
      // 在构建阶段结束后被调用，此处构建结束只是代表所有模块转义完成；
    },
    //  vite 与 rollup 的通用钩子之输出阶段
    outputOptions(options){
      // 接受输出参数
    },
    renderStart(outputOptions, inputOptions){
      // 每次 bundle.generate 和 bundle.write 调用时都会被触发；
    },
    augmentChunkHash(chunkInfo){
      // 用来给 chunk 增加 hash
    },
    renderChunk(code, chunk, options) {
      // 转译单个的chunk时触发。rollup 输出每一个chunk文件的时候都会调用；
    },
    generateBundle(options, bundle, isWrite){
      // 在调用 bundle.write 之前立即触发这个 hook
    },
    writeBundle(options, bundle){
      // 在调用 bundle.write后，所有的chunk都写入文件后，最后会调用一次 writeBundle；
    },
    closeBundle(){
      // 在服务器关闭时被调用
    }
  }
}