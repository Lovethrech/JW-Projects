<script setup>
import SideNavMainCtn from '@/components/user/sideNav/MainCtn.vue';
import TopNavMainCtn from "@/components/user/topNav/MainCtn.vue";
import SearchCtn from '@/components/user/SearchCtn.vue';
import MainContentMainCtn from "@/components/user/mainContent/MainCtn.vue";
</script>

<template>
    <div class="user-home-view">
        <main class="user-home-view-main">
            <SideNavMainCtn></SideNavMainCtn>
            <section class="user-home-view-main-mini-section">
                <TopNavMainCtn></TopNavMainCtn>
                <br/>
                <SearchCtn></SearchCtn>
                <br/>
                <MainContentMainCtn></MainContentMainCtn>
            </section>
        </main>
    </div>
</template>

<style scoped>
.user-home-view-main{
    display: flex;
    justify-content: space-between;
    gap:30px;
    flex-direction: row;
}
.user-home-view-main-mini-section{
    width:100%;
    margin:0 50px 0 350px;
}
</style>