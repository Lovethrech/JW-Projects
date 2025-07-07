<script setup>
import WelcomeTab from '../WelcomeTab.vue';
import MobileWelcomeIconCtn from "@/components/landing-page/MobileWelcomeIconCtn.vue";
</script>

<template>
    <div class="main-ctn">
        <div class="main-ctn-mini-ctn">
            <WelcomeTab></WelcomeTab>
            <MobileWelcomeIconCtn></MobileWelcomeIconCtn>
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
</style>