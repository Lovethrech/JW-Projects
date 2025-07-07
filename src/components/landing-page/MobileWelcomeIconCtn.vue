<template>
    <div class="mobile-welcome-icon-ct">
        <div class="mobile-welcome-icon-ct-mini-ctn">
            <img src="@/components/Icons/arrow-small-right.svg" alt="/welcome tab icon">
        </div>
    </div>
</template>

<style scoped>
.mobile-welcome-icon-ct{
    width:100%;
    display:flex;
    justify-content:right;
}
.mobile-welcome-icon-ct-mini-ctn{
    width:30px;
}
.mobile-welcome-icon-ct-mini-ctn:hover{
    transform:scaleX(1.3);
    transition: all .65s;
}
.mobile-welcome-icon-ct img{
    width:100%;
    height:100;
}
</style>
