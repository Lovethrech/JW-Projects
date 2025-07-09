<script setup>
import LHSContentsCtn from './LHSContentsCtn.vue';
import RHSContentsCtn from './RHSContentsCtn.vue';
</script>

<template>
    <div class="user-side-nav-top-nav-main-ctn">
        <div class="user-side-nav-top-nav-mini-ctn">
            <LHSContentsCtn></LHSContentsCtn>
            <RHSContentsCtn></RHSContentsCtn>
        </div>
    </div>
</template>

<style scoped>
.user-side-nav-top-nav-main-ctn{
    margin-right:30px;
}
.user-side-nav-top-nav-mini-ctn{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>