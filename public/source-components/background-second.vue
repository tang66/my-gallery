<template>
  <div class="test-bg">
    <div style="height:30px">header</div>
    <div style="">
      body
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
    <div style="height:20px">footer</div>
  </div>
  </template>
  
  <script setup lang="ts">
  import { ref, version as vueVersion } from 'vue'
  
  </script>
  <style>
  div.test-bg{
    border:1px solid red;
    background-image: 
   url('https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2798&q=80'),   url('https://images.unsplash.com/photo-1662898121938-32137da25608?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'),
   url('https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2798&q=80');
    background-size:100% 30px, 100% calc(100% - 50px), 100% 20px;
    background-position: top left, left 30px, bottom left;
    background-repeat:no-repeat,no-repeat,no-repeat;
  }
  </style>