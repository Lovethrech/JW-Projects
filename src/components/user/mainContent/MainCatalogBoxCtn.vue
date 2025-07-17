<script setup>
import MainCatalogBoxEmptyCtn from './MainCatalogBoxEmptyCtn.vue';
import ListCardCtn from "./ListCardCtn.vue";

const productNameDesc=ref("");
const noOfItems=ref("");
const noOfCartons=ref("");
const receivedDate=ref("");
const expiryDate=ref("");
const location=ref("");
const listCards=ref([]);

function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%";
}

const addListCard=()=>{
    listCards.value.push({
        id: Math.floor(Math.random() * 100000),
        productNameDesc: productNameDesc.value,
        noOfItems: noOfItems.value,
        noOfCartons: noOfCartons.value,
        receivedDate: receivedDate.value,
        expiryDate: expiryDate.value,
        location: location.value,
        backgroundColor: getRandomColor()
    });
    
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