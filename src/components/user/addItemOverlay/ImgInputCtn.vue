<script setup>
import {ref} from "vue";
// import { storeToRefs } from 'pinia';
import { useOverlayImageUploadToggleStore } from '@/stores/overlayImageUploadToggle';
import ImgPreviewEmptyCtn from './ImgPreviewEmptyCtn.vue';
import ImgPreviewCtn from './ImgPreviewCtn.vue';

const overlayImageUploadToggleStore=useOverlayImageUploadToggleStore();
// const {showInputtedImage, handleImageUpload}=useOverlayImageUploadToggleStore();
const inputImgUrl=ref("");
const showInputtedImage=ref(true);
const handleImageUpload=()=>{
        if (inputImgUrl.value===""){
            showInputtedImage.value=false;
            if (inputImgUrl.value!==""){
                console.log(inputImgUrl);
            }
        }
    }
// const {inputImgUrl}=storeToRefs(overlayImageUploadToggleStore);
</script>

<template>
    <div class="user-add-item-overlay-img-input-ctn-main-ctn">
        <label for="user-add-item-overlay-img-input-ctn-main-ctn-image-upload" @click="handleImageUpload">
            <div class="img-preview">
                <ImgPreviewEmptyCtn v-if="showInputtedImage"></ImgPreviewEmptyCtn>
                <ImgPreviewCtn v-else></ImgPreviewCtn>
            </div>
        </label>
        <input :value="inputImgUrl" type="file" accept="image/*" id="user-add-item-overlay-img-input-ctn-main-ctn-image-upload"/>
    </div>
</template>

<style scoped>
.user-add-item-overlay-img-input-ctn-main-ctn{
    width:100%;
    height:100%;
}
.user-add-item-overlay-img-input-ctn-main-ctn input{
    display:none;
}
.user-add-item-overlay-img-input-ctn-main-ctn label{
    width:100%;
    height:100%;
    background-color:transparent;
    display:flex;
    justify-content:center;
    place-items:center;
}
</style>