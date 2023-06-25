<template>
  <div class="common-layout h-full">
    <el-container class="h-full">
      <el-header>
        <el-row :gutter="20">
          <el-col :span="6">
            <h1>Gallery</h1>
          </el-col>
          <el-col :span="18">
            <el-menu
              :default-active="activeIndex"
              :router="true"
              background-color="transparent"
              mode="horizontal"
              text-color="#ffffff"
              active-text-color="#ffd04b"  
              style="--el-menu-border-color: transparent"
            >
              <template  v-for="item in menuList" :key="item.name" >
                <el-menu-item :index="item.name">{{ item.name }}</el-menu-item>
              </template>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-main style="min-height: auto">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref,getCurrentInstance } from 'vue';
import { useRoute } from 'vue-router';

const { proxy } = getCurrentInstance()!;
const route = useRoute();

console.log( proxy?.$router.getRoutes() || [],'111')

const menuList = [
  {
    name:'template',
  },
  {
    name:'text',
  }
] 
const activeIndex = ref(menuList[0].name)


</script>