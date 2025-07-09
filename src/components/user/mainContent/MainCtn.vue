<script setup>
import ItemMainListCtn from './ItemMainListCtn.vue';
import AddItemTab from './AddItemTab.vue';
import MainCatalogListNavCtn from './MainCatalogListNavCtn.vue';
import MainCatalogBoxCtn from './MainCatalogBoxCtn.vue';
import AddItemOverlayMainCtn from "@/components/user/addItemOverlay/MainCtn.vue";
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
                <AddItemOverlayMainCtn></AddItemOverlayMainCtn>
                <MainCatalogBoxCtn></MainCatalogBoxCtn>
            </main>
        </div>
    </div>
</template>

<style scoped>
.user-main-content-main-ctn-mini-ctn{
    display:flex;
    flex-direction: column;
}
.user-main-content-main-ctn-mini-ctn-header{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.user-main-content-main-ctn-mini-ctn-main-body{
    margin:3vh 0;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>