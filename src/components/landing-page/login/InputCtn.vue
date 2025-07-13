<script setup>
import { ref, defineProps } from "vue";
import { useGetLoginDetailsStore } from "@/stores/getLoginDetails";

const {name, nameFor,nameType}=defineProps(['name', 'nameFor', 'nameType']);
const {email, password}=useGetLoginDetailsStore();
console.log(email, password);
</script>

<template>
    <div class="input-ctn">
        <label :for="nameFor" class="input-ctn-name">{{name}}</label>
        <input  :id="nameFor" :type="nameType" required/>
    </div>
</template>