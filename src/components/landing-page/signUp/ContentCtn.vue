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
                <InputCtn
                    :name="authPageContents[1].contents[0].name"
                    :nameFor="authPageContents[1].contents[0].nameFor"
                    :nameType="authPageContents[1].contents[0].nameType"
                    class="form-input-ctn"
                >
                </InputCtn>
                <br/>
                <InputCtn
                    :name="authPageContents[1].contents[1].name"
                    :nameFor="authPageContents[1].contents[1].nameFor"
                    :nameType="authPageContents[1].contents[1].nameType"
                    class="form-input-ctn"
                >
                </InputCtn>
                <br/>
                <InputCtn
                    :name="authPageContents[1].contents[2].name"
                    :nameFor="authPageContents[1].contents[2].nameFor"
                    :nameType="authPageContents[1].contents[2].nameType"
                    class="form-input-ctn"
                >
                </InputCtn>
                <br/>
                <InputCtn
                    :name="authPageContents[1].contents[3].name"
                    :nameFor="authPageContents[1].contents[3].nameFor"
                    :nameType="authPageContents[1].contents[3].nameType"
                    class="form-input-ctn"
                >
                </InputCtn>
                <br/>
                <InputCtn
                    :name="authPageContents[1].contents[4].name"
                    :nameFor="authPageContents[1].contents[4].nameFor"
                    :nameType="authPageContents[1].contents[4].nameType"
                    class="form-input-ctn"
                >
                </InputCtn>
                <br/>
                <InputCtn
                    :name="authPageContents[1].contents[5].name"
                    :nameFor="authPageContents[1].contents[5].nameFor"
                    :nameType="authPageContents[1].contents[5].nameType"
                    class="form-input-ctn"
                >
                </InputCtn>
                <br/>
                <InputCtn
                    :name="authPageContents[1].contents[6].name"
                    :nameFor="authPageContents[1].contents[6].nameFor"
                    :nameType="authPageContents[1].contents[6].nameType"
                    class="form-input-ctn"
                >
                </InputCtn>
                <br/>
                <InputCtn
                    :name="authPageContents[1].contents[7].name"
                    :nameFor="authPageContents[1].contents[7].nameFor"
                    :nameType="authPageContents[1].contents[7].nameType"
                    class="form-input-ctn"
                >
                </InputCtn>
                <br/>
                <InputCtn
                    :name="authPageContents[1].contents[8].name"
                    :nameFor="authPageContents[1].contents[8].nameFor"
                    :nameType="authPageContents[1].contents[8].nameType"
                    class="form-input-ctn"
                >
                </InputCtn>
                <br/>
                <InputCtn
                    :name="authPageContents[1].contents[9].name"
                    :nameFor="authPageContents[1].contents[9].nameFor"
                    :nameType="authPageContents[1].contents[9].nameType"
                    class="form-input-ctn"
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
.content-ctn-mini-ctn{
    margin:5vh 4vw;
}
.form{
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, auto);
    gap:10px;
}
</style>