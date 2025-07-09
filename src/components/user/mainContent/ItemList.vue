<script setup>
import { defineProps } from 'vue';

const {name, link}=defineProps(['name', 'link']);
</script>

<template>
    <RouterLink :to="link" class="link">
        <div class="user-main-content-item-list-main-ctn">
            <p class="user-main-content-item-list-main-ctn-name">
                {{ name }}
            </p>
        </div>
    </RouterLink>
</template>

<style scoped>
.user-main-content-item-list-main-ctn{
    background-color: #ffffff;
    padding:8px;
}
.user-main-content-item-list-main-ctn-name{
    color:#000000;
    font-size:14px;
    text-transform: capitalize;
}
.user-main-content-item-list-main-ctn:hover{
    cursor:pointer;
    transform:scale(0.98);
    transition: all .6s;
}
</style>