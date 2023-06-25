<template>
	<div style="display:flex;column-gap:5px;row-gap:5px;flex-wrap:wrap;">
    <img src="https://cdn.pixabay.com/photo/2023/06/12/12/04/duck-8058344_1280.jpg" class="img1 center"/>
    <img src="https://cdn.pixabay.com/photo/2023/06/12/12/04/duck-8058344_1280.jpg" class="img1 vertical"/>
    <img src="https://cdn.pixabay.com/photo/2023/06/12/12/04/duck-8058344_1280.jpg" class="img1 horizontal"/>
    <img src="https://cdn.pixabay.com/photo/2023/06/12/12/04/duck-8058344_1280.jpg" class="img1 random" />
  </div>
</template>

<script setup lang="ts">
import { ref, version as vueVersion } from 'vue'
// https://juejin.cn/post/7246935481615925303
</script>
<style scoped>
.img1 {
        --s: 200px; /*图片尺寸*/

        width: var(--s);
        height: var(--s);
        box-sizing: border-box;
        cursor: pointer;
        transition: .5s;
    }
    .img1.center {
        object-fit: none; /* 它允许替代内容维持着原有的尺寸 */
        padding: calc(var(--s)/2);
        background: #88C425;
    }
    .img1.vertical {
        object-fit: cover; /* 亦可使用object-fit: none */
        padding-block: calc(var(--s)/2);
        background: #F07818;
    }
    .img1.horizontal {
        object-fit: cover;
        padding-inline: calc(var(--s)/2);
        background: #AB3E5B;
    }
    /* 你可以使用padding的任意形式，需确保padding覆盖到整个区域
       也需要确保正确地设置object-position和object-fit来创建固定图像的幻象
    */
    .img1.random {
        object-position: top left;
        object-fit: none;
        padding: 0 var(--s) var(--s) 0;
        background: pink;
    }
    .img1:hover,.img2:hover {
        padding: 0;
    }


</style>