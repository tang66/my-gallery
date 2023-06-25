<template>
  <el-row :gutter="20">
    <el-col v-for="item in list" :key="item.id" :span="6" @click="open(item)">
      <div class="col-item w-full h-full">
        <h4>{{ item.title }}</h4>
        <p>{{ item.des }}</p>
      </div>
    </el-col>
  </el-row>
  <detailes-dlg v-if="showDlg" :item="currentItem" @close="close"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import DetailesDlg from './detailes-dlg.vue';
import { listDict, ListItem, useReadLocalFile } from '@/hooks';


const list = listDict;
const { getFile } = useReadLocalFile();

const showDlg = ref(false)
const currentItem = ref({} as ListItem);

const open = (item:ListItem) => {
  currentItem.value = item;
  const html = getFile(`./source-components/${item.sourceName}.vue`);
  localStorage.setItem('$source-code', html as string)
  showDlg.value = true;
}
const close = () => {
  localStorage.removeItem('$source-code');
  showDlg.value = false
}
</script>

<style scoped lang="scss">
.el-col {
  height: 80px;
  margin-bottom: 20px;

  .col-item {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    cursor: pointer;
    background: rgba(36, 36, 36, 0.9);
    color: #ffffff;
    padding: 16px;
    flex: 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
   
    p {
      font-size: 12px;
      margin-top: 8px;
    }

  }
}
</style>