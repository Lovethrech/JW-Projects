<script setup>
import ImgPreviewEmptyCtn from './ImgPreviewEmptyCtn.vue';
import ImgPreviewCtn from './ImgPreviewCtn.vue';
</script>

<template>
    <div class="user-add-item-overlay-img-input-ctn-main-ctn">
        <label for="user-add-item-overlay-img-input-ctn-main-ctn-image-upload">
            <div class="img-preview">
                <ImgPreviewEmptyCtn v-if="!imageUrl"></ImgPreviewEmptyCtn>
                <ImgPreviewCtn v-else></ImgPreviewCtn>
            </div>
        </label>
        <input type="file" accept="image/*" id="user-add-item-overlay-img-input-ctn-main-ctn-image-upload"/>
    </div>
</template>

<style scoped>
.user-add-item-overlay-img-input-ctn-main-ctn{
    display:block;
    background-color: #000;
}
.user-add-item-overlay-img-input-ctn-main-ctn input{
    display:none;
    background-color:red;
}
.user-add-item-overlay-img-input-ctn-main-ctn label{
    position:absolute;
    left:11vw;
    bottom:18vh;
    width:77vw;
    height:290px;
    background-color:transparent;
    display:flex;
    justify-content:center;
    place-items:center;
}
</style>