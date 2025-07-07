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
    padding:26px 4vw;
}
.welcome-tab-mini-ctn{
    padding-top:50px;
}
</style>