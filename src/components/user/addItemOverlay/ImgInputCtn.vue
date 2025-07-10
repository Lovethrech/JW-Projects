<script setup>
import { useOverlayImageUploadToggleStore } from '@/stores/overlayImageUploadToggle';
const {onImageChange, imageInput}=useOverlayImageUploadToggleStore();
</script>

<template>
    <div class="user-add-item-overlay-img-input-ctn-main-ctn" ref="imageInput" @change="onImageChange">
        <input type="file" accept="image/*"/>
    </div>
</template>

<style scoped>
.user-add-item-overlay-img-input-ctn-main-ctn{
    display:none;
}
</style>