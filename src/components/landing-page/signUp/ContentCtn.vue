<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import authPageContents from '@/data/auth-page-contents.json';
import ContentDescCtn from './ContentDescCtn.vue';
import InputCtn from './InputCtn.vue';

const router=useRouter();
const inputCtnBorderAlertStyle=ref('3px solid #ededed');
const firstName=ref("");
</script>

<template>
    <div class="content-ctn">
        <div class="content-ctn-mini-ctn">
            <ContentDescCtn></ContentDescCtn>
            <form class="form">
                <div class="form-div">
                    <div class="input-ctn">
                        <label :for="authPageContents[1].contents[0].nameFor" class="input-ctn-name">{{authPageContents[1].contents[0].name}}</label>
                        <input v-model="firstName" :id="authPageContents[1].contents[0].nameFor" :type="authPageContents[1].contents[0].nameType" :style="{border: inputCtnBorderAlertStyle}"/>
                    </div>
                    <br/>
                    <InputCtn
                        :name="authPageContents[1].contents[1].name"
                        :nameFor="authPageContents[1].contents[1].nameFor"
                        :nameType="authPageContents[1].contents[1].nameType"
                    >
                    </InputCtn>
                </div>                
                <br/>
                <div class="form-div">
                    <InputCtn
                        :name="authPageContents[1].contents[2].name"
                        :nameFor="authPageContents[1].contents[2].nameFor"
                        :nameType="authPageContents[1].contents[2].nameType"
                    >
                    </InputCtn>
                    <br/>
                    <InputCtn
                        :name="authPageContents[1].contents[3].name"
                        :nameFor="authPageContents[1].contents[3].nameFor"
                        :nameType="authPageContents[1].contents[3].nameType"
                    >
                    </InputCtn>
                </div>
                <br/>
                <div class="form-div">
                    <InputCtn
                        :name="authPageContents[1].contents[4].name"
                        :nameFor="authPageContents[1].contents[4].nameFor"
                        :nameType="authPageContents[1].contents[4].nameType"
                    >
                    </InputCtn>
                    <br/>
                    <InputCtn
                        :name="authPageContents[1].contents[5].name"
                        :nameFor="authPageContents[1].contents[5].nameFor"
                        :nameType="authPageContents[1].contents[5].nameType"
                    >
                    </InputCtn>
                </div>
                <br/>
                <div class="form-div">
                    <InputCtn
                        :name="authPageContents[1].contents[6].name"
                        :nameFor="authPageContents[1].contents[6].nameFor"
                        :nameType="authPageContents[1].contents[6].nameType"
                    >
                    </InputCtn>
                    <br/>
                    <InputCtn
                        :name="authPageContents[1].contents[7].name"
                        :nameFor="authPageContents[1].contents[7].nameFor"
                        :nameType="authPageContents[1].contents[7].nameType"
                    >
                    </InputCtn>
                </div>
                <br/>
                <div class="form-div">
                    <InputCtn
                        :name="authPageContents[1].contents[8].name"
                        :nameFor="authPageContents[1].contents[8].nameFor"
                        :nameType="authPageContents[1].contents[8].nameType"
                    >
                    </InputCtn>
                    <br/>
                    <InputCtn
                        :name="authPageContents[1].contents[9].name"
                        :nameFor="authPageContents[1].contents[9].nameFor"
                        :nameType="authPageContents[1].contents[9].nameType"
                    >
                    </InputCtn>
                </div>
                <br/>
                <button type="submit" class="submit-ctn-link-button">
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