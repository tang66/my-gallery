<template>
  <el-dialog v-model="visible" :title="item?.title" draggable width="80%" @closed=" $emit( 'close' ) ">
    <div class="dlg-box">
      <div class="dlg-left">
        <component :is="dom[item!.name as keyof typeof dom] " />
      </div>
      <div class="dlg-right">
        <prism-editor  v-model="content" :highlight="highlighter" :line-numbers="true" :readonly="true"></prism-editor>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import { useSetDom } from '@/hooks';

defineProps( {
  item: Object
} )
defineEmits( ['close'] );

const CHARMAP = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"', '$ace$': '{' }
const code = localStorage.getItem('$source-code') ?? '';

const { dom } = useSetDom()

const visible = ref(true);
const content = ref('')




const escape2Html = (str:string) => {
  return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, (_, t) => CHARMAP[t as keyof typeof CHARMAP]).replace(/\$ace\$/ig, _ => CHARMAP[_ as keyof typeof CHARMAP])
}
content.value = escape2Html(code).replace(/\s*show-source\s*([^>]*)?/, '')


const highlighter = (code:string) => {
  return highlight(code, languages.js)
}
</script>

<style scoped lang="scss">
.dlg-box {
  min-height: 400px;
  display: flex;
  background: rgba(36, 36, 36, 1);
  .dlg-left {
    width: 45%;
    margin-right: 16px;
    overflow: hidden;
    position: relative;
  }
  .dlg-right {
    flex: 1;
    background: #ffffff;
  }
}
</style>