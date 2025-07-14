import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGetLoginDetailsStore = defineStore('getLoginDetails', () => {
    const defaultBorder=ref('3px solid #ededed');
    const activeBorder=ref('1px solid #C95F50');

    const email=ref('');
    const password=ref('');
    const inputCtnBorderAlertStyle=defaultBorder;

    const submitLoginDetails=()=>{
        if ((((email.value==="") && (email.value===null))&&((password.value==="") && (password.value===null)))|| (((email.value==="") && (email.value===null))||((password.value==="") && (password.value===null)))){
            inputCtnBorderAlertStyle.value=activeBorder;
        }
    }

    return {email, password, submitLoginDetails, inputCtnBorderAlertStyle};
});