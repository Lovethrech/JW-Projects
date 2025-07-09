<script setup>
import ItemMainListCtn from './ItemMainListCtn.vue';
import AddItemTab from './AddItemTab.vue';
import MainCatalogListNavCtn from './MainCatalogListNavCtn.vue';
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
            </main>
        </div>
    </div>
</template>

<style scoped>
.user-main-content-main-ctn-mini-ctn-header{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>