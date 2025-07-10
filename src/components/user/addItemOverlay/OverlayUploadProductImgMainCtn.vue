<script setup>
import ImgInputCtn from './ImgInputCtn.vue';
</script>

<template>
    <div class="user-add-item-overlay-upload-product-img-main-ctn">
        <div class="user-add-item-overlay-upload-product-img-mini-ctn">
            <ImgInputCtn></ImgInputCtn>
        </div>
    </div>
</template>

<style scoped>
.user-add-item-overlay-upload-product-img-main-ctn{
    cursor:pointer;
    width:100%;
    height:30vh;
    display:flex;
    justify-content: center;
    place-items: center;
    border:2px dotted hsla(0, 0%, 0%, 0.664);
    border-radius: 20px;;
}
.user-add-item-overlay-upload-product-img-mini-ctn{
    width:100%;
    height:100%;
    text-align:center;
}
</style>