<script setup>
import { useOverlayImageUploadToggleStore } from '@/stores/overlayImageUploadToggle';
const {handleImageUpload}=useOverlayImageUploadToggleStore();
</script>

<template>
    <div class="user-add-item-overlay-img-input-ctn-main-ctn" @change="handleImageUpload">
        <input type="file" accept="image/*"/>
    </div>
</template>

<style scoped>
.user-add-item-overlay-img-input-ctn-main-ctn{
    
    display:block;
    background-color: cornflowerblue;
}
.user-add-item-overlay-img-input-ctn-main-ctn input{
    width: 60vw;
    height:26vh;
}
</style>