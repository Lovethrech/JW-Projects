<script setup>
import { defineProps } from 'vue';

const { name, img, iconName, link }=defineProps(['name', 'img', 'iconName', 'link']);
</script>

<template>
    <RouterLink :to="link" class="link">
        <div class="user-side-nav-nav-main-ctn">
            <div class="user-side-nav-nav-main-ctn-mini-ctn">
                <div class="user-side-nav-nav-main-ctn-icon-ctn" v-html="img"></div>
                <p class="user-side-nav-title">
                    {{ name }}
                </p>
            </div>
        </div>
    </RouterLink>
</template>

<style scoped>
.user-side-nav-nav-main-ctn{
    width:100%;
    display:flex;
    justify-content: center;
}
.user-side-nav-nav-main-ctn-mini-ctn{
    width:100%;
    padding:10px 2vw;
    display:flex;
    flex-direction: row;
    gap:4px;
}
.user-side-nav-title{
    text-transform: capitalize;
}
.user-side-nav-nav-main-ctn-icon-ctn{
    font-size: 18px;
}
.user-side-nav-title, .user-side-nav-nav-main-ctn-icon-ctn{
    width:auto 0;
}
</style>