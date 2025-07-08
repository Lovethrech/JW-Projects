<script setup>
import WelcomeTabMainCtn from '../WelcomeTabMainCtn.vue';
import ContentCtn from './ContentCtn.vue';
</script>

<template>
    <div class="main-ctn">
        <div class="main-ctn-mini-ctn">
            <WelcomeTabMainCtn></WelcomeTabMainCtn>
            <ContentCtn></ContentCtn>
        </div>
    </div>
</template>

<style scoped>
.main-ctn-mini-ctn{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: row;
}
@media screen and (max-width:890px){
    .main-ctn-mini-ctn{
        width:200vw;
    }
}
</style>