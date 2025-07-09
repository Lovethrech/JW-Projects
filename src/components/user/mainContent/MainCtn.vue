<script setup>
import ItemMainListCtn from './ItemMainListCtn.vue';
import AddItemTab from './AddItemTab.vue';
</script>

<template>
    <div class="user-main-content-main-ctn-main-ctn">
        <div class="user-main-content-main-ctn-mini-ctn">
            <ItemMainListCtn></ItemMainListCtn>
            <AddItemTab></AddItemTab>
        </div>
    </div>
</template>

<style scoped>
.user-main-content-main-ctn-mini-ctn{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>