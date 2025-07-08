<template>
    <div class="welcome-tab-img-ctn">
        <img src="/public/cuate.svg" alt="Welcome tab Avatar">
    </div>
</template>

<style scoped>
.welcome-tab-img-ctn{
    padding:80px 0 0;
    width:25vw;
}
img{
    width:100%;
    height:100%;
}
@media screen and (max-width:890px){
    .welcome-tab-img-ctn{
        width:100%;
        display:flex;
        place-items:center;
        justify-content:center;
    }
    .welcome-tab-img-ctn img{
        width: 400px;
    }
}
@media screen and (max-width:500px){
    .welcome-tab-img-ctn img{
        width: 300px;
    }
}
@media screen and (max-width:360px){
    .welcome-tab-img-ctn img{
        width: 250px;
    }
}
</style>