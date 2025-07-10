<script setup>
import AddItemCtn from './AddItemCtn.vue';
import CancelOverlayCtn from './CancelOverlayCtn.vue';
</script>

<template>
    <div class="user-add-item-overlay-item-btn-main-ctn-main-ctn">
        <div class="user-add-item-overlay-item-btn-main-ctn-mini-ctn">
            <AddItemCtn></AddItemCtn>
            <CancelOverlayCtn></CancelOverlayCtn>
        </div>
    </div>
</template>

<style scoped>
.user-add-item-overlay-item-btn-main-ctn-main-ctn, .user-add-item-overlay-item-btn-main-ctn-mini-ctn{
    width:100%;
}
.user-add-item-overlay-item-btn-main-ctn-mini-ctn{
    display:flex;
    flex-direction: row;
    gap:20px;
}
</style>