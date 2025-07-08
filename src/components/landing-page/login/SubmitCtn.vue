<script setup>
import {ref, defineProps} from "vue";

const {name, nameFor, nameType, nameLink}=defineProps(['name', 'nameFor', 'nameType', 'nameLink']);
</script>

<template>
    <div class="submit-ctn">
        <RouterLink :to="nameLink" class="link">
            <button :type="nameType" class="submit-ctn-link-button">
                {{ name }}
            </button>
        </RouterLink>
    </div>
</template>

<style scoped>
.submit-ctn{
    width:100%;
    background-color: #7158FF;
    display:flex;
    justify-content: center;
    padding:10px;
    border-radius:10px;
}
.submit-ctn-link-button{
    background-color: transparent;
    color:#ffffff;
    font-size:20px;
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