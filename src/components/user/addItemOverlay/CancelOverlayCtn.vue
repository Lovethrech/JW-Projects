<script setup>
import { useUserAddItemOverlayModalStore } from '@/stores/userAddItemOverlayModal';

const {showUserAdditemOverlayActiveState}=useUserAddItemOverlayModalStore();
</script>

<template>
    <div class="user-add-item-overlay-cancel-overlay-ctn-main-ctn" @click="showUserAdditemOverlayActiveState">
        <div class="user-add-item-overlay-cancel-overlay-ctn-mini-ctn">
            <p class="user-add-item-overlay-cancel-overlay-ctn-main-ctn-name">
                Cancel
            </p>
        </div>
    </div>
</template>

<style scoped>
.user-add-item-overlay-cancel-overlay-ctn-main-ctn{
    width:100%;
    background-color: #ffffff;
    color:#000000;
    height:48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #4d35d3;
    border-radius: 10px;
}
.user-add-item-overlay-cancel-overlay-ctn-main-ctn:hover{
    cursor:pointer;
    transform: scale(0.98);
    transition: all .2s;
}
</style>