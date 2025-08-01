<script setup>
import { ref } from "vue";
import authPageContents from '@/data/auth-page-contents.json';
import ContentDescCtn from './ContentDescCtn.vue';

const email=ref('');
const password=ref('');
const inputCtnBorderAlertStyle=ref('3px solid #ededed');

// const isSubmitBtnDisabled=computed(()=>{
//     return !((email.value.trim() !=='') || (password.value.trim()!==''))
// });
const submitLoginDetails = () => {
    if (((email.value==="") && (password.value==="")) || ((email.value==="") || (password.value===""))){
        inputCtnBorderAlertStyle.value = '1px solid #C95F50';
    }
};
// watch([email, password]), ()=>{
//     if (email.value.trim() !== '' || password.value.trim() !== '') {
//         inputCtnBorderAlertStyle.value = '3px solid #ededed';
//     }
//     else{
//         
//     }
// }

// console.log(email, password);
</script>

<template>
    <div class="content-ctn">
        <div class="content-ctn-mini-ctn">
            <ContentDescCtn></ContentDescCtn>
            <form class="form" @submit.prevent="submitLoginDetails">
                <div class="input-ctn">
                    <label :for="authPageContents[0].contents[0].nameFor" class="input-ctn-name">{{authPageContents[0].contents[0].name}}</label>
                    <input v-model="email" :id="authPageContents[0].contents[0].nameFor" :type="authPageContents[0].contents[0].nameType" :style="{border: inputCtnBorderAlertStyle}" required/>
                </div><br/>
                <br/>

                <div class="input-ctn">
                    <label :for="authPageContents[0].contents[1].nameFor" class="input-ctn-name">{{authPageContents[0].contents[1].name}}</label>
                    <input v-model="password" :id="authPageContents[0].contents[1].nameFor" :type="authPageContents[0].contents[1].nameType" :style="{border: inputCtnBorderAlertStyle}" required/>
                </div><br/>
                <br/>      
                
                <button type="submit" class="submit-ctn-link-button" @click="submitLoginDetails">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>