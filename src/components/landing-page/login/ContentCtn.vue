<script setup>
import authPageContents from '@/data/auth-page-contents.json';
import ContentDescCtn from './ContentDescCtn.vue';
import InputCtn from './InputCtn.vue';
import SubmitCtn from '@/components/landing-page/SubmitCtn.vue';
</script>

<template>
    <div class="content-ctn">
        <div class="content-ctn-mini-ctn">
            <ContentDescCtn></ContentDescCtn>
            <form class="form">
                <div class="input-ctn">
                    <label :for="" class="input-ctn-name">{{:name="authPageContents[0].contents[0].name}}</label>
                    <input  :id="" :type="" required/>
                </div>

                <div class="input-ctn">
                    <label :for="" class="input-ctn-name">{{}}</label>
                    <input  :id="" :type="" required/>
                </div>
                <div class="input-ctn">
                    <label :for="" class="input-ctn-name">{{}}</label>
                    <input  :id="" :type="" required/>
                </div>

                <InputCtn
                    "
                    :nameFor="authPageContents[0].contents[0].nameFor"
                    :nameType="authPageContents[0].contents[0].nameType"
                    v-model="email"
                >
                </InputCtn>
                <br/>
                <br/>
                <InputCtn
                    :name="authPageContents[0].contents[1].name"
                    :nameFor="authPageContents[0].contents[1].nameFor"
                    :nameType="authPageContents[0].contents[1].nameType"
                >
                </InputCtn>
                <br/>
                <br/>
                <SubmitCtn
                    :name="authPageContents[0].contents[2].name"
                    :nameFor="authPageContents[0].contents[2].nameFor"
                    :nameType="authPageContents[0].contents[2].nameType"
                    :nameLink="authPageContents[0].contents[2].nameLink"
                >
                </SubmitCtn>
            </form>
        </div>
    </div>
</template>