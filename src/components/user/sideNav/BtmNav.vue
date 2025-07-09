<script setup>
import { defineProps } from 'vue';

const { name, img, iconName, link }=defineProps(['name', 'img', 'iconName', 'link']);
</script>

<template>
    <RouterLink :to="link" class="link">
        <div class="user-side-nav-btm-nav-main-ctn">
            <div class="user-side-nav-btm-nav-main-ctn-mini-ctn">
                <div class="user-side-nav-btm-nav-main-ctn-icon-ctn" v-html="img"></div>
                <p class="user-side-nav-title">
                    {{ name }}
                </p>
            </div>
        </div>
    </RouterLink>
</template>

<style scoped>
.user-side-nav-btm-nav-main-ctn{
    width:100%;
    display:flex;
    justify-content: center;
    margin-bottom:5vh;
 }
.user-side-nav-btm-nav-main-ctn-mini-ctn{
    width:70%;
    padding:10px;
    display:flex;
    flex-direction: row;
    gap:10px;
}
.user-side-nav-btm-nav-main-ctn-icon-ctn{
    width:16px;
    height:16px;
}
.user-side-nav-btm-nav-main-ctn img{
    width:100%;
    height:100%;
}
.user-side-nav-title{
    text-transform: capitalize;
}
.user-side-nav-title, .user-side-nav-btm-nav-main-ctn-icon-ctn{
    width:auto 0;
}
</style>
