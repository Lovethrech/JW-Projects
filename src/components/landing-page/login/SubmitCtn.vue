<script setup>
import {ref, defineProps} from "vue";

const {name, nameFor, nameType, nameLink}=defineProps(['name', 'nameFor', 'nameType', 'nameLink']);
</script>

<template>
    <div class="submit-ctn">
        <RouterLink to="/">
            <button type="submit">
                {{ name }}
            </button>
        </RouterLink>
    </div>
</template>