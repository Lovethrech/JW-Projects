<script setup>
import { useWelcomeTabToggleStore } from '@/stores/landingPageToggle';

const { shiftTab }= useWelcomeTabToggleStore();
</script>

<template>
    <div class="mobile-welcome-icon-ct">
        <div class="mobile-welcome-icon-ct-mini-ctn" @click="shiftTab">
            <img src="@/components/Icons/arrow-small-right.svg" alt="/welcome tab icon">
        </div>
    </div>
</template>

<style scoped>
.mobile-welcome-icon-ct{
    width:100%;
    display:flex;
    justify-content:right;
}
.mobile-welcome-icon-ct-mini-ctn{
    width:30px;
}
.mobile-welcome-icon-ct-mini-ctn:hover{
    cursor:pointer;
    transform:scaleX(1.3);
    transition: all .65s;
}
.mobile-welcome-icon-ct img{
    width:100%;
    height:100%;
}
@media screen and (max-width:890px){
    .mobile-welcome-icon-ct{
        width:100vw;
    }
}
</style>
