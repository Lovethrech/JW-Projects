<script setup>
import { useUserAddItemOverlayModalStore } from '@/stores/userAddItemOverlayModal';

const {showUserAdditemOverlayActiveState}=useUserAddItemOverlayModalStore();
</script>

<template>
    <div class="user-main-content-add-item-tab-main-ctn">
        <div class="user-main-content-add-item-tab-mini-ctn">
            <p class="user-main-content-add-item-tab-main-ctn-title">
                Add Item
            </p>
            <div class="user-main-content-add-item-tab-main-ctn-icon-ctn" @click="showUserAdditemOverlayActiveState">
                <i class="ri-folder-add-line"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
.user-main-content-add-item-tab-mini-ctn{
    display:flex;
    flex-direction: row;
    gap:10px;
}
.user-main-content-add-item-tab-main-ctn-title{
    font-size: 14px;
}
.user-main-content-add-item-tab-main-ctn-title, .user-main-content-add-item-tab-main-ctn-icon-ctn{
    margin:auto 0;
}
.user-main-content-add-item-tab-main-ctn-icon-ctn{
    background-color: #ededed;
    color: #4d35d3;
    font-size:18px;
    padding:10px;
}
.user-main-content-add-item-tab-main-ctn-icon-ctn:hover{
    cursor:pointer;
    transform: scale(0.9);
    transition: .2s;
}
</style>