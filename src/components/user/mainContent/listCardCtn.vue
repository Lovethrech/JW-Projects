<template>
    <div class="user-main-content-list-card-ctn-main-ctn">
        <div class="user-main-content-list-card-ctn-mini-ctn">
            <div class="user-main-content-list-card-ctn-main-ctn-product-name">
                <div class="user-main-content-list-card-ctn-main-ctn-product-name-img-ctn">
                    <img src="" alt="" width="100" height="100"/>
                </div>
                <p class="user-main-content-list-card-ctn-main-ctn-product-name-desc">
                    Milk
                </p>
            </div>
            <div class="user-main-content-list-card-ctn-main-ctn-no-of-item">
                <p class="user-main-content-list-card-ctn-main-ctn-no-of-item-desc">
                    20
                </p>
            </div>
            <div class="user-main-content-list-card-ctn-main-ctn-no-of-carton">
                <p class="user-main-content-list-card-ctn-main-ctn-no-of-carton-desc">
                    100
                </p>
            </div>
            <div class="user-main-content-list-card-ctn-main-ctn-received-date">
                <p class="user-main-content-list-card-ctn-main-ctn-received-date-desc">
                    11 Feb, 2024
                </p>
            </div>
            <div class="user-main-content-list-card-ctn-main-ctn-expiry-date">
                <p class="user-main-content-list-card-ctn-main-ctn-expiry-date-desc">
                    11 Feb, 2025
                </p>
            </div>
            <div class="user-main-content-list-card-ctn-main-ctn-location">
                <p class="user-main-content-list-card-ctn-main-ctn-location-desc">
                    Selection A
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.user-main-content-list-card-ctn-main-ctn{
    width:100%;
    height:100%;
}
.user-main-content-list-card-ctn-mini-ctn{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.user-main-content-list-card-ctn-main-ctn-product-name, .user-main-content-list-card-ctn-main-ctn-no-of-item, .user-main-content-list-card-ctn-main-ctn-no-of-carton, .user-main-content-list-card-ctn-main-ctn-received-date, .user-main-content-list-card-ctn-main-ctn-expiry-date, .user-main-content-list-card-ctn-main-ctn-location{
    width:16px;
    background-color:pink;
}
</style>