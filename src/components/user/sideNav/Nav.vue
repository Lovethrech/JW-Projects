<script setup>
import { defineProps } from 'vue';

const { name, icon, iconName, link }=defineProps(['name', 'icon', 'iconName', 'link']);
</script>

<template>
    <RouterLink :to="link">
        <div class="user-side-nav-nav-main-ctn">
            <div class="user-side-nav-nav-main-ctn-mini-ctn">
                <div class="user-side-nav-nav-main-ctn-icon-ctn">
                    <img src="@/components/Icons/home.svg" :alt="iconName">
                </div>
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
    background-color: #ffffff;
    width:70%;
    padding:10px;
    display:flex;
    flex-direction: row;
    gap:10px;
}
.user-side-nav-nav-main-ctn-icon-ctn{
    width:16px;
    height:16px;
}
.user-side-nav-nav-main-ctn img{
    width:100%;
    height:100%;
}
.user-side-nav-title{
    text-transform: capitalize;
}
.user-side-nav-title, .user-side-nav-nav-main-ctn-icon-ctn{
    width:auto 0;
}
</style>