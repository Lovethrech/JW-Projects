<script setup>
import WelcomeTabContentCtn from '../WelcomeTabContentCtn.vue';
import MobileWelcomeIconCtn from "@/components/landing-page/MobileWelcomeIconCtn.vue";
</script>

<template>
    <div class="welcome-tab-main-ctn">
        <div class="welcome-tab-main-ctn-mini-ctn">
            <WelcomeTabContentCtn></WelcomeTabContentCtn>
            <MobileWelcomeIconCtn class="mobile-welcome-icon-ctn"></MobileWelcomeIconCtn>
        </div>
    </div>
</template>

<style scoped>
.welcome-tab-main-ctn-mini-ctn{
    width:100%;
    height:100%;
}
.welcome-tab-main-ctn-mini-ctn{
    display:flex;
    justify-content: space-between;
    flex-direction: column;
}
.mobile-welcome-icon-ctn{
    display:none;
}
@media screen and (max-width:890px){
    .mobile-welcome-icon-ctn{
        display: flex;
    }
}
</style>