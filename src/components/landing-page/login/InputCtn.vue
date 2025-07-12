<script setup>
import { ref, defineProps } from "vue";
import { useGetLoginDetailsStore } from "@/stores/getLoginDetails";

const {name, nameFor,nameType}=defineProps(['name', 'nameFor', 'nameType']);
const {email}=useGetLoginDetailsStore();
console.log(email);
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
            :v-model="name"
            :id="nameFor"
            :type="nameType"
            required
        />
    </div>
</template>