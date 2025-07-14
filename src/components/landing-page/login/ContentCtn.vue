<script setup>
import { useGetLoginDetailsStore } from "@/stores/getLoginDetails";
import authPageContents from '@/data/auth-page-contents.json';
import ContentDescCtn from './ContentDescCtn.vue';
import SubmitCtn from '@/components/landing-page/SubmitCtn.vue';

const {email, password,inputCtnBorderAlertStyle, submitLoginDetails}=useGetLoginDetailsStore();
console.log(email, password);
</script>

<template>
    <div class="content-ctn">
        <div class="content-ctn-mini-ctn">
            <ContentDescCtn></ContentDescCtn>
            <form class="form">
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
                <SubmitCtn
                    :name="authPageContents[0].contents[2].name"
                    :nameFor="authPageContents[0].contents[2].nameFor"
                    :nameType="authPageContents[0].contents[2].nameType"
                    :nameLink="authPageContents[0].contents[2].nameLink"
                    @click="submitLoginDetails"
                >
                </SubmitCtn>
            </form>
        </div>
    </div>
</template>