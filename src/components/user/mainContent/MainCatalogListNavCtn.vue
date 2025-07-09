<script setup>
import userMainCatalogNavLists from "@/data/user-main-catalog-nav-lists.json";
import MainCatalogListNav from './MainCatalogListNav.vue';
</script>

<template>
    <div class="main-catalog-list-nav-ctn-main-ctn">
        <div class="main-catalog-list-nav-ctn-mini-ctn">
            <MainCatalogListNav
                v-for="userMainCatalogNavList in userMainCatalogNavLists"
                :key="userMainCatalogNavList.id"
                :name="userMainCatalogNavList.name"
            >
            </MainCatalogListNav>
        </div>
    </div>
</template>

<style scoped>
.main-catalog-list-nav-ctn-main-ctn{
    background-color: #ededed;
    padding:10px;
}
.main-catalog-list-nav-ctn-mini-ctn{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>