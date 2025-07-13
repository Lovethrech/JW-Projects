import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGetLoginDetailsStore = defineStore('getLoginDetails', () => {
    const email=ref('nameE');
    const password=ref('namePassowrd');

    const submitLoginDetails=()=>{
        if ((email.value==="")&&(password.value="")){

        }
    }

    return {email, password, submitLoginDetails};
});