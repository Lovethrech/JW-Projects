<script setup>
import { storeToRefs } from 'pinia';
import { useOverlayImageUploadToggleStore } from '@/stores/overlayImageUploadToggle';
import ImgPreviewEmptyCtn from './ImgPreviewEmptyCtn.vue';
import ImgPreviewCtn from './ImgPreviewCtn.vue';
const {imageUrl}=storeToRefs(overlayImageUploadToggleStore);
</script>

<template>
    <div class="user-add-item-overlay-upload-product-img-main-ctn">
        <div class="user-add-item-overlay-upload-product-img-mini-ctn">
            <ImgPreviewEmptyCtn></ImgPreviewEmptyCtn>
            <ImgPreviewCtn></ImgPreviewCtn>            
        </div>
    </div>
</template>

<style scoped>
.user-add-item-overlay-upload-product-img-main-ctn{
    width:100%;
    height:30vh;
    display:flex;
    justify-content: center;
    place-items: center;
    border:2px dotted hsla(0, 0%, 0%, 0.664);
    border-radius: 20px;;
}
.user-add-item-overlay-upload-product-img-mini-ctn{
    text-align:center;
}
</style>