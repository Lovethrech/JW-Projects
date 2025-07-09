<template>
    <div class="user-add-item-overlay-main-ctn-main-ctn">
        <div class="user-add-item-overlay-main-ctn-mini-ctn">
            <p class="user-add-item-overlay-main-ctn-mini-ctn-modal-title">
                Product Details
            </p>
            <p class="user-add-item-overlay-main-ctn-mini-ctn-modal-desc">
                Give details of the product to help identify and track the product.
            </p>
            <div class="user-add-item-overlay-main-ctn-mini-ctn-form">

            </div>
        </div>
    </div>
</template>

<style scoped>
.user-add-item-overlay-main-ctn-main-ctn{
    position:absolute;
    top:0;
    left:0;
    z-index:10;
    background-color: rgba(0, 0, 0, 0.404);
    width:100vw;
    height:100vh;
    display:flex;
    justify-content: center;
    place-items: center;
}
.user-add-item-overlay-main-ctn-mini-ctn{
    position:relative;
    background-color: #ededed;
    width:70vw;
    height:90vh;
}
</style>