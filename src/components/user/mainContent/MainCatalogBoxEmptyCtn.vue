<template>
    <div class="main-catalog-box-empty-ctn-main-ctn">
        <div class="main-catalog-box-empty-ctn-mini-ctn">
            <div class="main-catalog-box-empty-ctn-mini-ctn-icon-ctn">
                <img src="@/components/Icons/add-folder.svg" alt="">
            </div>
            <p class="main-catalog-box-empty-ctn-mini-ctn-icon-desc">
                Tap on field to Add item
            </p>
        </div>
    </div>
</template>

<style scoped>
.main-catalog-box-empty-ctn-main-ctn{
    width:30%;
    height:30%;
    display: flex;
    justify-content: center;
    place-items:center;
    border: 1px dotted hsla(0, 0%, 0%, 0.644);
    border-radius:20px;
}
.main-catalog-box-empty-ctn-main-ctn:hover{
    cursor:pointer;
}
.main-catalog-box-empty-ctn-mini-ctn-icon-ctn{
    width:100%;
    display:flex;
    justify-content: center;
}
.main-catalog-box-empty-ctn-mini-ctn-icon-ctn img{
    width:20px;
    height:100%;
}
.main-catalog-box-empty-ctn-mini-ctn-icon-desc{
    color:hsla(0, 0%, 0%, 0.644);
    font-size: 14px;
    margin-top:4px;
}
</style>