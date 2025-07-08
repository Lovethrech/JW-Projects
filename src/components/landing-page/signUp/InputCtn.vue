<script setup>
import { ref, defineProps } from "vue";

const {name, nameFor,nameType}=defineProps(['name', 'nameFor', 'nameType']);
</script>

<template>
    <div class="input-ctn">
        <label 
            :for="nameFor" 
            class="input-ctn-name"
        >
            {{name}}
        </label>
        <input 
            :id="nameFor"
            :type="nameType"
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
    text-transform: capitalize;
}
.input-ctn input{
    width:100%;
    height:40px;
    font-size:20px;
    border:0;
    border-bottom: 2px solid #cecaca;
}
</style>