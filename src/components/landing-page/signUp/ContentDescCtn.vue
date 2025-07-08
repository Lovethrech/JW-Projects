<template>
    <div class="content-desc-ctn">
        <div class="content-desc-ctn-mini-ctn">
            <h1 class="title">
                Sign up
            </h1>
            <p class="desc">
                Have an account with us? <RouterLink to="/">Login</RouterLink>
            </p>
        </div>
    </div>
</template>

<style scoped>
.content-desc-ctn .content-desc-ctn-mini-ctn .title{
    font-size:3.5vh;
    font-weight:700;
    padding:5px 5px 5px 0;
    margin-bottom: 10px;
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