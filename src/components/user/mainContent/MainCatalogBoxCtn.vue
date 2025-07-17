<script setup>
import MainCatalogBoxEmptyCtn from './MainCatalogBoxEmptyCtn.vue';
import listCardCtn from "@/components/user/mainContent/"
</script>

<template>
    <div class="main-catalog-box-ctn-main-ctn">
        <div class="main-catalog-box-ctn-main-ctn-list-card-ctn">
        </div>
        
        <div class="main-catalog-box-ctn-mini-ctn">
            <MainCatalogBoxEmptyCtn></MainCatalogBoxEmptyCtn>
        </div>
    </div>
</template>

<style scoped>
.main-catalog-box-ctn-main-ctn{
    width:100%;
    height:600px;
}
.main-catalog-box-ctn-mini-ctn{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
}
</style>