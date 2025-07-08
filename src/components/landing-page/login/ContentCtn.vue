<script setup>
import ContentDescCtn from './ContentDescCtn.vue';
import InputCtn from './InputCtn.vue';
</script>

<template>
    <div class="content-ctn">
        <div class="content-ctn-mini-ctn">
            <ContentDescCtn></ContentDescCtn>
        </div>
    </div>
</template>

<style scoped>
.content-ctn{
    background-color: #ffffff;
    width:100%;
    min-height:100vh;
    display:flex;
    place-items: center;
    justify-content: center;
}
.content-ctn-mini-ctn{
    width:60%;
    min-height:80vh;
}

@media screen and (max-width:890px){
    .content-ctn{
        width:100vw;
        justify-content: left;
        padding:0 4vw;
    }
}
</style>