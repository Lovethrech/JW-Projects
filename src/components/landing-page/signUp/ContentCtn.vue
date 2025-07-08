<script setup>
import authPageContents from '@/data/auth-page-contents.json';
import ContentDescCtn from './ContentDescCtn.vue';
import InputCtn from './InputCtn.vue';
import SubmitCtn from './SubmitCtn.vue';
</script>

<template>
    <div class="content-ctn">
        <div class="content-ctn-mini-ctn">
            <ContentDescCtn></ContentDescCtn>
            <form class="form">
                <InputCtn
                    :name="authPageContents[1].contents[0].name"
                    :nameFor="authPageContents[1].contents[0].nameFor"
                    :nameType="authPageContents[1].contents[0].nameType"
                >
                </InputCtn>
                <br/>
                <InputCtn
                    :name="authPageContents[1].contents[1].name"
                    :nameFor="authPageContents[1].contents[1].nameFor"
                    :nameType="authPageContents[1].contents[1].nameType"
                >
                </InputCtn>
                <br/>
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
                <br/>
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
                <br/>
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
                <br/>
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
                <br/>
                <br/>
                <SubmitCtn
                    :name="authPageContents[1].contents[10].name"
                    :nameFor="authPageContents[1].contents[10].nameFor"
                    :nameType="authPageContents[1].contents[10].nameType"
                    :nameLink="authPageContents[1].contents[10].nameLink"
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
    margin:5vh 4vw;
}
.form{
    margin-top:4vh;
    display:flex;
    flex-wrap: wrap;
    gap:20px;
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