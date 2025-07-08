<script setup>
import authPageContents from '@/data/auth-page-contents.json';
import ContentDescCtn from './ContentDescCtn.vue';
import InputCtn from './InputCtn.vue';
import SubmitCtn from '../SubmitCtn.vue';
</script>

<template>
    <div class="content-ctn">
        <div class="content-ctn-mini-ctn">
            <ContentDescCtn></ContentDescCtn>
            <form class="form">
                <InputCtn
                    :name="authPageContents[0].contents[0].name"
                    :nameFor="authPageContents[0].contents[0].nameFor"
                    :nameType="authPageContents[0].contents[0].nameType"
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

<style scoped>
.content-ctn{
    background-color: #ffffff;
    width:100%;
    min-height:100vh;
    display:flex;
    place-items: center;
    justify-content: center;
}
.content-ctn-mini-ctn{
    width:60%;
    min-height:70vh;
}
.form{
    margin-top:4vh;
}
@media screen and (max-width:890px){
    .content-ctn{
        width:100vw;
        justify-content: left;
        padding:0 4vw;
    }
    .content-ctn-mini-ctn{
        width:100%;
    }
}
</style>