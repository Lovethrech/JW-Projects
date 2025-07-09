<script setup>
import userSideNavContents from "@/data/user-side-nav-contents.json";
import TopNav from './TopNav.vue';
import MainNavCtn from './MainNavCtn.vue';
import BtmNav from './BtmNav.vue';
</script>

<template>
    <div class="main-ctn">
        <div class="main-ctn-mini-ctn">
            <section class="top-section">
                <header>
                    <TopNav></TopNav>
                </header>
                <section class="nav-contents">
                    <MainNavCtn></MainNavCtn>
                </section>
            </section>
            <BtmNav
                :name="userSideNavContents[3].name"
                :img="userSideNavContents[3].img"
                :iconName="userSideNavContents[3].iconName"
                :link="userSideNavContents[3].link"
            >
            </BtmNav>
        </div>
    </div>
</template>

<style scoped>
.main-ctn{
    position:fixed;
    background-color: #d9d9d9 ;
    height:100vh;
    width: 300px;
}
.main-ctn-mini-ctn{
    width:100%;
    height:100%;
}
.nav-contents{
    margin:5vh 0;
}
</style>