import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGetLoginDetailsStore = defineStore('getLoginDetails', () => {

    const defaultBorder=ref('')
    const email=ref('nameE');
    const password=ref('namePassowrd');
    const inputCtnBorderAlertStyle=ref('')

    const submitLoginDetails=()=>{
        if ((email.value==="")&&(password.value="")){

        }
    }

    return {email, password, submitLoginDetails};
});