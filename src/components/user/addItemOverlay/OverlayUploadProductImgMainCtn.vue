<script setup>
import { storeToRefs } from 'pinia';
import { useOverlayImageUploadToggleStore } from '@/stores/overlayImageUploadToggle';
import ImgInputCtn from './ImgInputCtn.vue';

const overlayImageUploadToggleStore=useOverlayImageUploadToggleStore();
const {handleImageUpload}=useOverlayImageUploadToggleStore();
const {imageUrl}=storeToRefs(overlayImageUploadToggleStore);
</script>

<template>
    <div class="user-add-item-overlay-upload-product-img-main-ctn" id="image-container">
        <div class="user-add-item-overlay-upload-product-img-mini-ctn">
            <ImgInputCtn></ImgInputCtn>
            <div class="img-preview">
                <ImgPreviewEmptyCtn v-if="!imageUrl"></ImgPreviewEmptyCtn>
                <ImgPreviewCtn v-else></ImgPreviewCtn>
            </div>
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
    text-align:center;
}
</style>