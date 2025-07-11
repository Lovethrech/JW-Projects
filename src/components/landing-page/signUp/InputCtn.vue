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
            required
        />
    </div>
</template>

<style scoped>
.input-ctn{
    width: 45%;
}
</style>