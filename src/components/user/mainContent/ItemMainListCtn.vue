<script setup>
import userMainContentsMainDescs from "@/data/user-main-contents-main-descs.json";
import ItemList from './ItemList.vue';
</script>

<template>
    <div class="user-main-content-item-main-list-ctn-main-ctn">
        <div class="user-main-content-item-main-list-ctn-mini-ctn">
            <ItemList
                v-for="userMainContentsMainDesc in userMainContentsMainDescs"
                :key="userMainContentsMainDesc.id"
                :name="userMainContentsMainDesc.name"
                :link="userMainContentsMainDesc.link"
            >
            </ItemList>
        </div>
    </div>
</template>

<style scoped>
.user-main-content-item-main-list-ctn-main-ctn{
    background-color: #ededed;
    padding:8px;
}
.user-main-content-item-main-list-ctn-mini-ctn{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    gap:10px;
}
</style>