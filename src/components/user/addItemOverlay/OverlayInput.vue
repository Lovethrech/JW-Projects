<script setup>
import { defineProps } from 'vue';

const {name, nameFor, nameType}=defineProps(['name', 'nameFor', 'nameType']);
</script>

<template>
    <div class="user-add-item-overlay-input-main-ctn">
        <div class="user-add-item-overlay-input-mini-ctn">
            <label 
                :for="nameFor" 
                class="user-add-item-overlay-input-mini-ctn-input-ctn-name"
            >
                {{ name }}
            </label>
            <input 
                :id="nameFor"
                :type="nameType"
                class="user-add-item-overlay-input-mini-ctn-input"
            />
        </div>
    </div>
</template>

<style scoped>
.user-add-item-overlay-input-main-ctn{
    width:50%;
}
.user-add-item-overlay-input-mini-ctn-input-ctn-name{
    color:#6a6a6a;
    font-size:12px;
    font-weight: 400;
    letter-spacing: 0.25px;
    text-transform: capitalize;
}
.user-add-item-overlay-input-mini-ctn-input{
    background-color: transparent;
    width:100%;
    height:40px;
    padding:4px;
    font-size:16px;
    border: 3px solid #d9d9d9;
    border-radius: 8px;
}
</style>