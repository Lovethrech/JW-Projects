<script setup>
import { useOverlayImageUploadToggleStore } from '@/stores/overlayImageUploadToggle';
const {previewUrl}=useOverlayImageUploadToggleStore();
</script>

<template>
    <div class="user-add-item-overlay-img-preview-ctn-main-ctn">
        <img :src="previewUrl" alt="">
    </div>
</template>