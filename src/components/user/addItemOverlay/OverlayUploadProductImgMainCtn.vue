<template>
    <div class="user-add-item-overlay-upload-product-img-main-ctn">
        <div class="user-add-item-overlay-upload-product-img-mini-ctn">
            <p class="user-add-item-overlay-upload-product-img-mini-ctn-title">
                upload product image
            </p>
            <div class="user-add-item-overlay-upload-product-img-mini-ctn-icon-ctn">
                <i class="ri-add-circle-line"></i>
            </div>
            <p class="user-add-item-overlay-upload-product-img-mini-ctn-desc">
                Tap on field to add image
            </p>
        </div>
    </div>
</template>

<style scoped>
.user-add-item-overlay-upload-product-img-main-ctn{
    width:100%;
    height:30vh;
    display:flex;
    justify-content: center;
    place-items: center;
    border:2px dotted hsla(0, 0%, 0%, 0.664);
    border-radius: 20px;;
}
.user-add-item-overlay-upload-product-img-mini-ctn{
    text-align:center;
}
.user-add-item-overlay-upload-product-img-mini-ctn-title{
    text-transform: capitalize;
    color:hsla(0, 0%, 0%, 0.418);
}
.user-add-item-overlay-upload-product-img-mini-ctn-title, .user-add-item-overlay-upload-product-img-mini-ctn-icon-ctn{
    font-size:22px;
}
.user-add-item-overlay-upload-product-img-mini-ctn-desc{
    font-size:12px;
    color: hsla(0, 0%, 0%, 0.418);
}
</style>