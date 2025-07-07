<script setup>
import WelcomeTab from '../WelcomeTab.vue';
import MobileWelcomeIconCtn from "@/components/landing-page/MobileWelcomeIconCtn.vue";
</script>

<template>
    <div class="main-ctn">
        <div class="main-ctn-mini-ctn">
            <WelcomeTab></WelcomeTab>
            <MobileWelcomeIconCtn class="mobile-welcome-icon-ctn"></MobileWelcomeIconCtn>
        </div>
    </div>
</template>

<style scoped>
.main-ctn-mini-ctn{
    width:100%;
    height:100%;
}
.main-ctn-mini-ctn{
    display:flex;
    justify-content: space-between;
    flex-direction: column;
}
.mobile-welcome-icon-ctn{
    display:none;
}
@media screen and (max-width:890px){
    .mobile-welcome-icon-ctn{
        display: block;
    }
}
</style>