<script setup>
import { storeToRefs } from 'pinia';
import { useUserAddItemOverlayModalStore } from '@/stores/userAddItemOverlayModal';
import ItemMainListCtn from './ItemMainListCtn.vue';
import AddItemTab from './AddItemTab.vue';
import MainCatalogListNavCtn from './MainCatalogListNavCtn.vue';
import MainCatalogBoxCtn from './MainCatalogBoxCtn.vue';
import AddItemOverlayMainCtn from "@/components/user/addItemOverlay/MainCtn.vue";

const userAddItemOverlayModalStore=useUserAddItemOverlayModalStore();
const { showUserAdditemOverlayDefaultState }=storeToRefs(userAddItemOverlayModalStore);
</script>

<template>
    <div class="user-main-content-main-ctn-main-ctn">
        <div class="user-main-content-main-ctn-mini-ctn">
            <header class="user-main-content-main-ctn-mini-ctn-header">
                <ItemMainListCtn></ItemMainListCtn>
                <AddItemTab></AddItemTab>
            </header> 
            <main class="user-main-content-main-ctn-mini-ctn-main-body">
                <MainCatalogListNavCtn></MainCatalogListNavCtn>
                <AddItemOverlayMainCtn v-if="showUserAdditemOverlayDefaultState"></AddItemOverlayMainCtn>
                <MainCatalogBoxCtn></MainCatalogBoxCtn>
            </main>
        </div>
    </div>
</template>

<style scoped>
.user-main-content-main-ctn-mini-ctn, .user-main-content-main-ctn-mini-ctn-header, .user-main-content-main-ctn-mini-ctn-main-body{
    display:flex;
}
.user-main-content-main-ctn-mini-ctn, .user-main-content-main-ctn-mini-ctn-main-body{
    flex-direction: column;
}
.user-main-content-main-ctn-mini-ctn-header, .user-main-content-main-ctn-mini-ctn-main-body{
    justify-content: space-between;
}
.user-main-content-main-ctn-mini-ctn-header{
    flex-direction: row;
    justify-content: space-between;
}
.user-main-content-main-ctn-mini-ctn-main-body{
    margin:3vh 0;
}
</style>