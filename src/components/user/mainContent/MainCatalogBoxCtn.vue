<script setup>
import MainCatalogBoxEmptyCtn from './MainCatalogBoxEmptyCtn.vue';
import ListCardCtn from "./ListCardCtn.vue";

const listCards=ref([]);

function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%";
}

const addListCard=()=>{
    
}
</script>

<template>
    <div class="main-catalog-box-ctn-main-ctn">
        <div class="main-catalog-box-ctn-main-ctn-list-card-ctn">
            <ListCardCtn
            >
            </ListCardCtn>
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