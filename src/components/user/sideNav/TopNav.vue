<script setup>
import Logo from '@/components/Logo.vue';
// import LogoutIconCtn from './LogoutIconCtn.vue';
</script>

<template>
    <div class="user-side-nav-top-nav">
        <div class="user-side-nav-top-nav-mini-ctn">
            <Logo></Logo>
            <!-- <LogoutIconCtn></LogoutIconCtn> -->
        </div>
    </div>
</template>

<style scoped>
.user-side-nav-top-nav{
    padding:20px 40px;
}
.user-side-nav-top-nav-mini-ctn{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>