<script setup>
import { defineProps } from 'vue';

const {name, link}=defineProps(['name', 'link']);
</script>

<template>
    <div class="user-main-content-item-list-main-ctn">
        <p class="user-main-content-item-list-main-ctn-name">
            {{ name }}
        </p>
    </div>
</template>

<style scoped>
.user-main-content-item-list-main-ctn{
    background-color: #ffffff;
    padding:8px;
}
.user-main-content-item-list-main-ctn-name{
    color:#000000;
    text-transform: capitalize;
}
</style>