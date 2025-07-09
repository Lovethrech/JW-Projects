<template>
    <div class="rhs-content-ctn-main-ctn">
        <div class="rhs-content-ctn-mini-ctn">
            <div class="rhs-content-ctn-main-ctn-notification-ctn">
                <p class="rhs-content-ctn-main-ctn-notification-ctn-title">
                    Notification
                </p>
                <div class="rhs-content-ctn-main-ctn-notification-ctn-icon-ctn">
                    <img src="@/components/Icons/notification-icon.svg" alt=""/>
                </div>
            </div>
            <div class="rhs-content-ctn-main-ctn-user-img-ctn">
                <img src="/martha.jpg" alt=""/>
            </div>
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
.rhs-content-ctn-main-ctn-user-img-ctn{
    width:30px;
    height:30px;
    border-radius: 50%;
}
.rhs-content-ctn-main-ctn-user-img-ctn img{
    width:100%;
    height:100%;
    border-radius: inherit;
}
</style>