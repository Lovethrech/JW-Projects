<template>
    <div class="lhs-content-ctn-main-ctn">
        <div class="lhs-content-ctn-mini-ctn">
            <div class="product-overview-icon">
                <img src="@/components/Icons/overview-icon.svg" alt=""/>
            </div>
            <p class="lhs-content-ctn-main-ctn-title">
                Product Overview
            </p>
        </div>
    </div>
</template>

<style scoped>
.lhs-content-ctn-main-ctn{
    margin: 10px 0;
}
.lhs-content-ctn-mini-ctn{
    display:flex;
    flex-direction: row;
    gap:10px;
}
.product-overview-icon{
    background-color: #d9d9d9;
    padding:10px;
    border-radius: 50%;;
}
.lhs-content-ctn-main-ctn-title{
    margin: auto 0;
}
</style>