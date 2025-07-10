<script setup>
import ImgInputCtn from './ImgInputCtn.vue';
import ImgPreviewEmptyCtn from './ImgPreviewEmptyCtn.vue';
import ImgPreviewCtn from './ImgPreviewCtn.vue';
</script>

<template>
    <div class="user-add-item-overlay-upload-product-img-main-ctn">
        <div class="user-add-item-overlay-upload-product-img-mini-ctn">
            <ImgInputCtn></ImgInputCtn>
            <div class="img-preview">
                <ImgPreviewEmptyCtn></ImgPreviewEmptyCtn>
                <ImgPreviewCtn></ImgPreviewCtn>
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