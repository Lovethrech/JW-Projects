<template>
    <div class="lhs-content-ctn-main-ctn">
        <div class="lhs-content-ctn-mini-ctn">
            <div class="product-overview-icon">
                <i class="ri-dashboard-horizontal-fill"></i>
            </div>
            <p class="lhs-content-ctn-main-ctn-title">
                Product view
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
    background-color: #ededed;
    padding:10px;
    border-radius: 10px;
}
.lhs-content-ctn-main-ctn-title{
    margin: auto 0;
    font-size:22px;
    font-weight:500;
}
</style>