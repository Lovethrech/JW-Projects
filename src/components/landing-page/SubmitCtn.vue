<script setup>
import {ref, defineProps} from "vue";

const {name, nameFor, nameType, nameLink}=defineProps(['name', 'nameFor', 'nameType', 'nameLink']);
</script>

<template>
    <RouterLink to="/home" class="link">
        <button class="submit-ctn-link-button">
            <!-- :disabled="isSubmitBtnDisabled" @click="submitLoginDetails" -->
            <div :type="nameType" class="submit-ctn">
                {{ name }}
            </div>
        </button>
    </RouterLink>
</template>

<style scoped>
.submit-ctn-link-button{
    width:100%;
    height:48px;
    background-color: #4d35d3;
    display:flex;
    justify-content: center;
    padding:10px;
    border-radius:10px;
}
.submit-ctn{
    background-color: transparent;
    color:#ffffff;
    font-size:16px;
    font-weight:400;
    border:0;
    text-transform: capitalize;
    letter-spacing:2px;
}
.submit-ctn-link-button:hover{
    cursor:pointer;
    background-color: #000000;
    transform:scaleX(0.99);
    transition: all .8s;
}
</style>