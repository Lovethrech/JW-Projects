<script setup>
import OverlayInput from './OverlayInput.vue';
import OverlayInputDrop from './OverlayInputDrop.vue';
</script>

<template>
    <div class="user-add-item-overlay-input-main-ctn-main-ctn">
        <div class="user-add-item-overlay-input-main-ctn-mini-ctn">
            <div class="user-add-item-overlay-input-main-ctn-mini-ctn-category">
                <OverlayInput></OverlayInput>
                <OverlayInputDrop></OverlayInputDrop>
            </div>
            <div class="user-add-item-overlay-input-main-ctn-mini-ctn-category">

            </div>
            <div class="user-add-item-overlay-input-main-ctn-mini-ctn-category">
                
            </div>
            <div class="user-add-item-overlay-input-main-ctn-mini-ctn-category">

            </div>
            
        </div>
    </div>
</template>

<style scoped>
.user-add-item-overlay-input-main-ctn-mini-ctn-category{
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap:20px;
}
</style>