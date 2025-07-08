<template>
    <div class="content-desc-ctn">
        <div class="content-desc-ctn-mini-ctn">
            <h1 class="title">
                Login
            </h1>
            <p class="desc">
                Have no account with us? <RouterLink to="/signUp">Sign up</RouterLink>
            </p>
        </div>
    </div>
</template>

<style scoped>
.content-desc-ctn .content-desc-ctn-mini-ctn .title{
    color: #1e1e1e;
    font-size:3.33vh;
    font-weight:700;
}
.content-desc-ctn .content-desc-ctn-mini-ctn .desc{
    padding-left: 2px;
    font-size: 16px;
    font-weight: 400;
}
.content-desc-ctn .content-desc-ctn-mini-ctn .title, .content-desc-ctn .content-desc-ctn-mini-ctn .desc{
    text-align: left;
}
</style>