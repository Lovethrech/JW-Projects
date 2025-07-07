<script setup>
import Logo from '../Logo.vue';
import WelcomeTabImgCtn from './WelcomeTabImgCtn.vue';
import WelcomeTabTextCtn from './WelcomeTabTextCtn.vue';
</script>

<template>
    <section class="welcome-tab">
        <Logo></Logo>
        <div class="welcome-tab-mini-ctn">
            <WelcomeTabTextCtn></WelcomeTabTextCtn>
            <WelcomeTabImgCtn></WelcomeTabImgCtn>
        </div>
    </section>
</template>

<style scoped>
.welcome-tab{
    padding:16px;
}
</style>