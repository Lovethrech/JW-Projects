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
    width:50%;
    height:100%;
    display: flex;
    justify-content: center;
    place-items:center
}
.main-catalog-box-empty-ctn-mini-ctn-icon-ctn{
    width:20px;
}
.main-catalog-box-empty-ctn-mini-ctn-icon-ctn img{
    width:100%;
    height:100%;
}
</style>