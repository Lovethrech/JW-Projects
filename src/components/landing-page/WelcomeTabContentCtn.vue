<script setup>
import Logo from '../Logo.vue';
import WelcomeTabImgCtn from './WelcomeTabImgCtn.vue';
import WelcomeTabTextCtn from './WelcomeTabTextCtn.vue';
</script>

<template>
    <section class="welcome-tab-content-ctn">
        <Logo></Logo>
        <div class="welcome-tab-content-ctn-mini-ctn">
            <WelcomeTabTextCtn></WelcomeTabTextCtn>
            <WelcomeTabImgCtn></WelcomeTabImgCtn>
        </div>
    </section>
</template>

<style scoped>
.welcome-tab-content-ctn{
    padding:26px 4vw;
}
.welcome-tab-content-ctn-mini-ctn{
    padding-top:10vh;
}
@media screen and (max-width:890px){
    .welcome-tab-content-ctn{
        padding: 26px 20px;
    }
}
</style>