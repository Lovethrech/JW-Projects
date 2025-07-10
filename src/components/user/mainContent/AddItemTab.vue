<script setup>
import { useUserAddItemOverlayModalStore } from '@/stores/userAddItemOverlayModal';
</script>

<template>
    <div class="user-main-content-add-item-tab-main-ctn">
        <div class="user-main-content-add-item-tab-mini-ctn">
            <p class="user-main-content-add-item-tab-main-ctn-title">
                Add Item
            </p>
            <div class="user-main-content-add-item-tab-main-ctn-icon-ctn" @click="showUserAdditemOverlayDefaultState">
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
    padding:10px;
}
.user-main-content-add-item-tab-main-ctn-icon-ctn:hover{
    cursor:pointer;
    transform: scale(0.9);
    transition: .2s;
}
</style>