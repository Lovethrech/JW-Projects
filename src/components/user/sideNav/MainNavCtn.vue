<script setup>
import { useSideNavActiveToggleStore } from "@/stores/sideNavActiveToggle";
import userSideNavContents from "@/data/user-side-nav-contents.json";
import Nav from './Nav.vue';

const {homeStyle, integrateStyle, reportStyle}=useSideNavActiveToggleStore();
</script>

<template>
    <div class="user-side-nav-main-nav-ctn">
        <div class="user-side-nav-main-nav-ctn-mini-ctn">
            <Nav
                :name="userSideNavContents[0].name"
                :img="userSideNavContents[0].img"
                :iconName="userSideNavContents[0].iconName"
                :link="userSideNavContents[0].link"
                :style="homeStyle"
            >
            </Nav>
            <Nav
                :name="userSideNavContents[1].name"
                :img="userSideNavContents[1].img"
                :iconName="userSideNavContents[1].iconName"
                :link="userSideNavContents[1].link"
                :style="integrateStyle"
            >
            </Nav>
            <Nav
                :name="userSideNavContents[2].name"
                :img="userSideNavContents[2].img"
                :iconName="userSideNavContents[2].iconName"
                :link="userSideNavContents[2].link"
                :style="reportStyle"
            >
            </Nav>
        </div>
    </div>
</template>

<style scoped>
.user-side-nav-main-nav-ctn-mini-ctn{
    display:flex;
    flex-direction: column;
    gap:3vh;
}
</style>