<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import authPageContents from '@/data/auth-page-contents.json';
import ContentDescCtn from './ContentDescCtn.vue';

const router=useRouter();
const inputCtnBorderAlertStyle=ref('3px solid #ededed');
const firstName=ref("");
const lastName=ref("");
const emailAddress=ref("");
const phoneNumber=ref("");
const password=ref("");
const confirmPassword=ref("");
const businessName=ref("");
const businessType=ref("");
const inventorySize=ref("");
const preferresAlertChannel=ref("");

const submitSignUpDetails=()=>{
    if (((firstName.value==="") && (lastName.value==="") && (emailAddress.value==="") && (phoneNumber.value==="") && (password.value==="") && (confirmPassword.value==="") && (businessName.value==="") && (businessType.value==="") && (inventorySize.value==="") && (preferresAlertChannel.value==="")) || ((firstName.value==="") || (lastName.value==="") || (emailAddress.value==="") || (phoneNumber.value==="") || (password.value==="") || (confirmPassword.value==="") || (businessName.value==="") || (businessType.value==="") || (inventorySize.value==="") || (preferresAlertChannel.value===""))){
        inputCtnBorderAlertStyle.value = '1px solid #C95F50';
        
    }
    else{
        router.push('/home');
    }
}
</script>

<template>
    <div class="content-ctn">
        <div class="content-ctn-mini-ctn">
            <ContentDescCtn></ContentDescCtn>
            <form class="form" @submit.prevent="submitSignUpDetails">
                <div class="form-div">
                    <div class="input-ctn-sign">
                        <label :for="authPageContents[1].contents[0].nameFor" class="input-ctn-name">{{authPageContents[1].contents[0].name}}</label>
                        <input v-model="firstName" :id="authPageContents[1].contents[0].nameFor" :type="authPageContents[1].contents[0].nameType" :style="{border: inputCtnBorderAlertStyle}"/>
                    </div>
                    <br/>
                    <div class="input-ctn-sign">
                        <label :for="authPageContents[1].contents[1].nameFor" class="input-ctn-name">{{authPageContents[1].contents[1].name}}</label>
                        <input v-model="lastName" :id="authPageContents[1].contents[1].nameFor" :type="authPageContents[1].contents[1].nameType" :style="{border: inputCtnBorderAlertStyle}"/>
                    </div>
                </div>                
                <br/>
                <div class="form-div">
                    <div class="input-ctn-sign">
                        <label :for="authPageContents[1].contents[2].nameFor" class="input-ctn-name">{{authPageContents[1].contents[2].name}}</label>
                        <input v-model="emailAddress" :id="authPageContents[1].contents[2].nameFor" :type="authPageContents[1].contents[2].nameType" :style="{border: inputCtnBorderAlertStyle}"/>
                    </div>
                    <br/>
                    <div class="input-ctn-sign">
                        <label :for="authPageContents[1].contents[3].nameFor" class="input-ctn-name">{{authPageContents[1].contents[3].name}}</label>
                        <input v-model="phoneNumber" :id="authPageContents[1].contents[3].nameFor" :type="authPageContents[1].contents[3].nameType" :style="{border: inputCtnBorderAlertStyle}"/>
                    </div>
                </div>
                <br/>
                <div class="form-div">
                    <div class="input-ctn-sign">
                        <label :for="authPageContents[1].contents[4].nameFor" class="input-ctn-name">{{authPageContents[1].contents[4].name}}</label>
                        <input v-model="password" :id="authPageContents[1].contents[4].nameFor" :type="authPageContents[1].contents[4].nameType" :style="{border: inputCtnBorderAlertStyle}"/>
                    </div>
                    <br/>
                    <div class="input-ctn-sign">
                        <label :for="authPageContents[1].contents[5].nameFor" class="input-ctn-name">{{authPageContents[1].contents[5].name}}</label>
                        <input v-model="confirmPassword" :id="authPageContents[1].contents[5].nameFor" :type="authPageContents[1].contents[5].nameType" :style="{border: inputCtnBorderAlertStyle}"/>
                    </div>
                </div>
                <br/>
                <div class="form-div">
                    <div class="input-ctn-sign">
                        <label :for="authPageContents[1].contents[6].nameFor" class="input-ctn-name">{{authPageContents[1].contents[6].name}}</label>
                        <input v-model="businessName" :id="authPageContents[1].contents[6].nameFor" :type="authPageContents[1].contents[6].nameType" :style="{border: inputCtnBorderAlertStyle}"/>
                    </div>
                    <br/>
                    <div class="input-ctn-sign">
                        <label :for="authPageContents[1].contents[7].nameFor" class="input-ctn-name">{{authPageContents[1].contents[7].name}}</label>
                        <input v-model="businessType" :id="authPageContents[1].contents[7].nameFor" :type="authPageContents[1].contents[7].nameType" :style="{border: inputCtnBorderAlertStyle}"/>
                    </div>
                </div>
                <br/>
                <div class="form-div">
                    <div class="input-ctn-sign">
                        <label :for="authPageContents[1].contents[8].nameFor" class="input-ctn-name">{{authPageContents[1].contents[8].name}}</label>
                        <input v-model="inventorySize" min="10" :id="authPageContents[1].contents[8].nameFor" :type="authPageContents[1].contents[8].nameType" :style="{border: inputCtnBorderAlertStyle}"/>
                    </div>
                    <br/>
                    <div class="input-ctn-sign">
                        <label :for="authPageContents[1].contents[9].nameFor" class="input-ctn-name">{{authPageContents[1].contents[9].name}}</label>
                        <input v-model="preferresAlertChannel" :id="authPageContents[1].contents[9].nameFor" :type="authPageContents[1].contents[9].nameType" :style="{border: inputCtnBorderAlertStyle}"/>
                    </div>
                </div>
                <br/>
                <button type="submit" class="submit-ctn-link-button" @click="submitSignUpDetails">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.content-ctn-mini-ctn{
    margin:5vh 4vw;
}
.form, .form-div{
    display: flex;
    flex-wrap: nowrap;
}
.form{
    flex-direction: column;
    gap:10px;
}
.form-div{
    flex-direction: row;
    justify-content: space-between;
}
</style>