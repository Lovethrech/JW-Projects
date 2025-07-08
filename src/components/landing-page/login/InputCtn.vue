<script setup>
import { ref, props } from "vue";

const {lname, nameFor,nameType}=defineProps(['name', 'nameFor', 'nameType']);
</script>

<template>
    <div class="input-ctn">
        <label for="email" class="input-ctn-name">
            Email
        </label>
        <input 
            id="email"
            type="text"
        />
    </div>
</template>

<style scoped>
.input-ctn{
    display:flex;
    flex-direction:column;
}
.input-ctn-name{
    color:#777676;
}
.input-ctn input{
    width:100%;
    height:40px;
    font-size:20px;
    border:0;
    border-bottom: 2px solid #cecaca;
}
</style>