<script setup>
import { useUserAddItemOverlayModalStore } from '@/stores/userAddItemOverlayModal';

const {showUserAdditemOverlayActiveState}=useUserAddItemOverlayModalStore();
</script>

<template>
    <div class="main-catalog-box-empty-ctn-main-ctn" @click="showUserAdditemOverlayActiveState">
        <div class="main-catalog-box-empty-ctn-mini-ctn">
            <div class="main-catalog-box-empty-ctn-mini-ctn-icon-ctn">
                <i class="ri-folder-add-line"></i>
            </div>
            <p class="main-catalog-box-empty-ctn-mini-ctn-icon-desc">
                Tap on field to Add item
            </p>
        </div>
    </div>
</template>

<style scoped>
.main-catalog-box-empty-ctn-main-ctn, .main-catalog-box-empty-ctn-mini-ctn-icon-ctn{
    display:flex;
    justify-content: center;
} 
.main-catalog-box-empty-ctn-main-ctn{
    width:30%;
    height:30%;
    place-items:center;
    border: 1px dotted hsla(0, 0%, 0%, 0.644);
    border-radius:20px;
}
.main-catalog-box-empty-ctn-main-ctn:hover{
    cursor:pointer;
}
.main-catalog-box-empty-ctn-mini-ctn-icon-ctn{
    color: hsla(0, 0%, 0%, 0.596);
    font-size: 24px;
    width:100%;
}
.main-catalog-box-empty-ctn-mini-ctn-icon-ctn img{
    width:20px;
    height:100%;
}
.main-catalog-box-empty-ctn-mini-ctn-icon-desc{
    color:hsla(0, 0%, 0%, 0.644);
    font-size: 14px;
    margin-top:4px;
}
</style>