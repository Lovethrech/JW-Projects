<script setup>
import { useWelcomeTabToggleStore } from '@/stores/landingPageToggle';
import WelcomeTabContentCtn from './WelcomeTabContentCtn.vue';
import MobileWelcomeIconCtn from './MobileWelcomeIconCtn.vue';

const { WelcomeTabActive }= useWelcomeTabToggleStore();
</script>

<template>
    <div class="welcome-tab-main-ctn" :style="[WelcomeTabActive]">
        <div class="welcome-tab-main-ctn-mini-ctn">
            <WelcomeTabContentCtn></WelcomeTabContentCtn>
            <MobileWelcomeIconCtn class="mobile-welcome-icon-ctn"></MobileWelcomeIconCtn>
        </div>
    </div>
</template>

<style scoped>
.welcome-tab-main-ctn{
    background-color: #f0eded;
    height:100vh;
    width: 40vw;
}
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
    .welcome-tab-main-ctn{
        width:100vw;
    }
    .mobile-welcome-icon-ctn{
        display: flex;
    }
}
</style>