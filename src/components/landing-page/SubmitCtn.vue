<script setup>
import {ref, defineProps} from "vue";

const {name, nameFor, nameType, nameLink}=defineProps(['name', 'nameFor', 'nameType', 'nameLink']);
console.log(nameLink)
</script>

<template>
    <RouterLink :to="nameLink" class="link">
        <div class="submit-ctn">
            <button :type="nameType" class="submit-ctn-link-button">
                {{ name }}
            </button>
        </div>
    </RouterLink>
</template>

<style scoped>
.submit-ctn{
    width:100%;
    background-color: #4d35d3;
    display:flex;
    justify-content: center;
    padding:10px;
    border-radius:10px;
}
.submit-ctn-link-button{
    background-color: transparent;
    color:#ffffff;
    font-size:16px;
    font-weight:400;
    border:0;
    text-transform: capitalize;
    letter-spacing:2px;
}
.submit-ctn:hover{
    cursor:pointer;
    background-color: #000000;
    transform:scaleX(0.99);
    transition: all .8s;
}
</style>