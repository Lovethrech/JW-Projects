<script setup>
import SideNavMainCtn from '@/components/user/sideNav/MainCtn.vue';
import TopNavMainCtn from "@/components/user/topNav/MainCtn.vue";
import MainContentMainCtn from "@/components/user/mainContent/MainCtn.vue";
</script>

<template>
    <div class="user-home-view">
        <main>
            <SideNavMainCtn></SideNavMainCtn>
            <section>
                <TopNavMainCtn></TopNavMainCtn>
                <MainContentMainCtn></MainContentMainCtn>
            </section>
        </main>
    </div>
</template>