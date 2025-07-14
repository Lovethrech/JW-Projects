import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGetLoginDetailsStore = defineStore('getLoginDetails', () => {
    const defaultBorder=ref('3px solid #ededed');
    const activeBorder=ref('3px solid red');

    const email=ref('nameE');
    const password=ref('namePassowrd');
    const inputCtnBorderAlertStyle=defaultBorder;

    const submitLoginDetails=()=>{
        if ((email.value==="")&&(password.value="")){

        }
    }

    return {email, password, submitLoginDetails, inputCtnBorderAlertStyle};
});