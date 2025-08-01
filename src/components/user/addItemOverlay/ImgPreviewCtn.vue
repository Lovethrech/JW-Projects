<script setup>
import { defineProps } from 'vue';

const {inputImgUrl}=defineProps(['inputImgUrl']);
</script>

<template>
    <div class="user-add-item-overlay-img-preview-ctn-main-ctn">
        <img :src="inputImgUrl" alt="Uploaded Image">
    </div>
</template>

<style scoped>
.user-add-item-overlay-img-preview-ctn-main-ctn{
    width: 100px;
    display: block;
    margin: auto;
    border-radius: 10px;
}
.user-add-item-overlay-img-preview-ctn-main-ctn img{
    width:100%;
    height:100%;
}
</style>