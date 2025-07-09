<script setup>
import { useUserAddItemOverlayModalStore } from '@/stores/userAddItemOverlayModal';
import UserAddItemOverlayInputMainCtn from "@/components/user/addItemOverlay/OverlayInputMainCtn.vue";

const {showUserAdditemOverlayDefaultState}=useUserAddItemOverlayModalStore();
</script>

<template>
    <div class="user-add-item-overlay-main-ctn-main-ctn" :style="{display: showUserAdditemOverlayDefaultState}">
        <div class="user-add-item-overlay-main-ctn-mini-ctn">
            <p class="user-add-item-overlay-main-ctn-mini-ctn-modal-title">
                Product Details
            </p>
            <br/>
            <p class="user-add-item-overlay-main-ctn-mini-ctn-modal-desc">
                Give details of the product to help identify and track the product.
            </p>
            <div class="user-add-item-overlay-main-ctn-mini-ctn-form">
                <UserAddItemOverlayInputMainCtn></UserAddItemOverlayInputMainCtn>
            </div>
        </div>
    </div>
</template>

<style scoped>
.user-add-item-overlay-main-ctn-main-ctn{
    position:absolute;
    top:0;
    left:0;
    z-index:10;
    background-color: rgba(0, 0, 0, 0.404);
    width:99vw;
    height:120%;
    display:flex;
    justify-content: center;
    place-items: center;
}
.user-add-item-overlay-main-ctn-mini-ctn{
    background-color: #ededed;
    width:90vw;
    height:100%;
    padding:40px 60px;
}
.user-add-item-overlay-main-ctn-mini-ctn-modal-title{
    font-size:34px;
}
.user-add-item-overlay-main-ctn-mini-ctn-modal-desc{
    font-size: 14px;
}
.user-add-item-overlay-main-ctn-mini-ctn-form{
    margin: 30px 0;
}
</style>