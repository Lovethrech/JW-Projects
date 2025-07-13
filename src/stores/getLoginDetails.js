import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGetLoginDetailsStore = defineStore('getLoginDetails', () => {
    const email=ref('nameE');
    const password=ref('namePassowrd');

    return {email, password};
});