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
}
.submit-ctn-link-button{
    background-color: transparent;
}
</style>