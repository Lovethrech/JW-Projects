<script setup>
import userSideNavContents from "@/data/user-side-nav-contents.json";
import Nav from './Nav.vue';
</script>

<template>
    <div class="user-side-nav-main-nav-ctn">
        <div class="user-side-nav-main-nav-ctn-mini-ctn">
            <Nav
                :name="userSideNavContents[0].name"
                :icon="userSideNavContents[0].icon"
                :iconName="userSideNavContents[0].iconName"
                :link="userSideNavContents[0].link"
            >
            </Nav>
        </div>
    </div>
</template>