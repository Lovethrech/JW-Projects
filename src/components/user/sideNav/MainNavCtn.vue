<script setup>
import userSideNavContents from "@/data/user-side-nav-contents.json";
import Nav from './Nav.vue';
</script>

<template>
    <div class="user-side-nav-main-nav-ctn">
        <div class="user-side-nav-main-nav-ctn-mini-ctn">
            <Nav
                :name="userSideNavContents[0].name"
                :img="userSideNavContents[0].img"
                :iconName="userSideNavContents[0].iconName"
                :link="userSideNavContents[0].link"
            >
            </Nav>
            <Nav
                :name="userSideNavContents[1].name"
                :img="userSideNavContents[0].img"
                :iconName="userSideNavContents[1].iconName"
                :link="userSideNavContents[1].link"
            >
            </Nav>
            <Nav
                :name="userSideNavContents[2].name"
                :img="userSideNavContents[0].img"
                :iconName="userSideNavContents[2].iconName"
                :link="userSideNavContents[2].link"
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