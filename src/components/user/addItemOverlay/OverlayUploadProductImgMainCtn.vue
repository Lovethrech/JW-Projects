<script setup>
import { useOverlayImageUploadToggleStore } from '@/stores/overlayImageUploadToggle';
import ImgInputCtn from './ImgInputCtn.vue';
import ImgPreviewEmptyCtn from './ImgPreviewEmptyCtn.vue';
import ImgPreviewCtn from './ImgPreviewCtn.vue';
const {triggerImageUpload, previewUrl}=useOverlayImageUploadToggleStore();
</script>

<template>
    <div class="user-add-item-overlay-upload-product-img-main-ctn" @click="triggerImageUpload">
        <div class="user-add-item-overlay-upload-product-img-mini-ctn">
            <ImgInputCtn></ImgInputCtn>
            <div class="img-preview">
                <ImgPreviewEmptyCtn v-if="!previewUrl"></ImgPreviewEmptyCtn>
                <ImgPreviewCtn v-else></ImgPreviewCtn>
            </div>
            
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