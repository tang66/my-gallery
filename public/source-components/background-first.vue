<template>
  <div class="test-bg">
    <div class="header" style="height:30px">header</div>
    <div class="body" style="">
      body
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
    <div class="footer" style="height:20px">footer</div>
  </div>
  </template>
  
  <script setup lang="ts">
  import { ref, version as vueVersion } from 'vue'
  
  </script>
  <style scoped>
  div.test-bg{
    width: 100%;
    color: white;
  }
    div.test-bg .body {
      background-image: url('https://images.unsplash.com/photo-1662898121938-32137da25608?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');
      background-size:100% 100%;
      background-position: top left;
      background-repeat:no-repeat;
    }
    div.test-bg .header{
      border: 1px solid blue;
      
      background-image: 
     url('https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2798&q=80'),url('https://images.unsplash.com/photo-1662898121938-32137da25608?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'),
     url('https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2798&q=80');
      background-size: 70px 30px, calc(100% - 120px) 30px, 50px 30px;
      background-position: top left, 70px top, top right;
      background-repeat:no-repeat,no-repeat,no-repeat;
  }
    div.test-bg .footer{
      border: 1px solid red;
      background-image: 
     url('https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2798&q=80'),url('https://images.unsplash.com/photo-1662898121938-32137da25608?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'),
     url('https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2798&q=80');
      background-size: 20px 30px, calc(100% - 50px) 30px, 30px 30px;
      background-position: top left, 20px top, top right;
      background-repeat:no-repeat,no-repeat,no-repeat;
  }
  </style>