import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGetLoginDetailsStore = defineStore('getLoginDetails', () => {
    const loginValue=reactive({
        email:"",
        password:''
    })

    return {loginValue};
});