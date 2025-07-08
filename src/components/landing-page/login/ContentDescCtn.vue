<template>
    <div class="content-desc-ctn">
        <div class="content-desc-ctn-mini-ctn">
            <h1 class="title">
                Login
            </h1>
            <p class="desc">
                Have an account with us? <RouterLink to="/signUp">Sign up</RouterLink>
            </p>
        </div>
    </div>
</template>

<style scoped>
.content-desc-ctn .content-desc-ctn-mini-ctn .title{
    font-size:3.5vh;
    font-weight:800;
}
.content-desc-ctn .content-desc-ctn-mini-ctn .desc{
    padding-left: 2px;
    font-size: 16px;
    font-weight: 300;
}
.content-desc-ctn .content-desc-ctn-mini-ctn .title, .content-desc-ctn .content-desc-ctn-mini-ctn .desc{
    text-align: left;
}
</style>