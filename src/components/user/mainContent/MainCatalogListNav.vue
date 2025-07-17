<script setup>
import {defineProps} from "vue";

const {name}=defineProps(['name']);
</script>

<template>
    <div class="main-catalog-list-nav-main-ctn">
        <p class="main-catalog-list-nav-main-ctn-name">
            {{ name }}
        </p>
    </div>
</template>

<style scoped>
.main-catalog-list-nav-main-ctn{
    width:16%;
    padding:6px;
}
.main-catalog-list-nav-main-ctn-name{
    text-transform: capitalize;
}
</style>