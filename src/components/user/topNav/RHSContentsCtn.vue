<template>
    <div class="rhs-content-ctn-main-ctn">
        <div class="rhs-content-ctn-mini-ctn">
            <div class="rhs-content-ctn-main-ctn-notification-ctn">
                <p class="rhs-content-ctn-main-ctn-notification-ctn-title">
                    Notification
                </p>
                <div class="rhs-content-ctn-main-ctn-notification-ctn-icon-ctn">
                    <i class="ri-notification-3-line"></i>
                </div>
            </div>
            <!-- <div class="rhs-content-ctn-main-ctn-user-img-ctn">
                <img src="/public/martha.jpg" alt=""/>
            </div> -->
        </div>
    </div>
</template>

<style scoped>
.rhs-content-ctn-main-ctn{
    margin:auto 0;
}
.rhs-content-ctn-mini-ctn, .rhs-content-ctn-main-ctn-notification-ctn{
    display:flex;
    flex-direction: row;
    gap:10px;
}
.rhs-content-ctn-main-ctn-notification-ctn-title{
    margin: auto 0;
}
.rhs-content-ctn-main-ctn-notification-ctn-icon-ctn{
    width:40px;
    height:40px;
    background-color: #ededed;
    color:#4d35d3;
    font-size:20px;
    padding:10px;
    border-radius: 10px;
}
.rhs-content-ctn-main-ctn-notification-ctn-icon-ctn img{
    width:100%;
    height:100%;
}
.rhs-content-ctn-main-ctn-user-img-ctn{
    margin:auto 0;
    width:40px;
    height:40px;
    border-radius: 50%;
}
.rhs-content-ctn-main-ctn-user-img-ctn img{
    width:100%;
    height:100%;
    border-radius: inherit;
}
</style>