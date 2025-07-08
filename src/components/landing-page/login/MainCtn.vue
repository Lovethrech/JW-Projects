<script setup>
import WelcomeTabMainCtn from '@/components/landing-page/WelcomeTabMainCtn.vue';
import ContentCtn from './ContentCtn.vue';
</script>

<template>
    <div class="auth-main-ctn">
        <div class="auth-main-ctn-mini-ctn">
            <WelcomeTabMainCtn></WelcomeTabMainCtn>
            <ContentCtn></ContentCtn>
        </div>
    </div>
</template>