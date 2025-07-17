<script setup>
import { useUserAddItemOverlayModalStore } from '@/stores/userAddItemOverlayModal';

const {productNameDesc, noOfItems, noOfCartons, receivedDate, expiryDate, location}=useUserAddItemOverlayModalStore();
</script>


<template>
    <div class="user-main-content-list-card-ctn-main-ctn">
        <div class="user-main-content-list-card-ctn-mini-ctn">
            <div class="user-main-content-list-card-ctn-main-ctn-product-name">
                <div class="user-main-content-list-card-ctn-main-ctn-product-name-img-ctn">
                    <img src="" alt=""/>
                </div>
                <p class="user-main-content-list-card-ctn-main-ctn-product-name-desc">
                    {{ productNameDesc }}
                </p>
            </div>
            <div class="user-main-content-list-card-ctn-main-ctn-no-of-item">
                <p class="user-main-content-list-card-ctn-main-ctn-no-of-item-desc">
                    {{ noOfItems }}
                </p>
            </div>
            <div class="user-main-content-list-card-ctn-main-ctn-no-of-carton">
                <p class="user-main-content-list-card-ctn-main-ctn-no-of-carton-desc">
                    {{ noOfCartons }}
                </p>
            </div>
            <div class="user-main-content-list-card-ctn-main-ctn-received-date">
                <p class="user-main-content-list-card-ctn-main-ctn-received-date-desc">
                    {{ receivedDate }}
                </p>
            </div>
            <div class="user-main-content-list-card-ctn-main-ctn-expiry-date">
                <p class="user-main-content-list-card-ctn-main-ctn-expiry-date-desc">
                    {{ expiryDate }}
                </p>
            </div>
            <div class="user-main-content-list-card-ctn-main-ctn-location">
                <p class="user-main-content-list-card-ctn-main-ctn-location-desc">
                    {{ location }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.user-main-content-list-card-ctn-main-ctn{
    width:100%;
    padding: 4px 0;
    display: flex;
    justify-content: center;
}
.user-main-content-list-card-ctn-mini-ctn{
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.user-main-content-list-card-ctn-main-ctn-product-name, .user-main-content-list-card-ctn-main-ctn-no-of-item, .user-main-content-list-card-ctn-main-ctn-no-of-carton, .user-main-content-list-card-ctn-main-ctn-received-date, .user-main-content-list-card-ctn-main-ctn-expiry-date, .user-main-content-list-card-ctn-main-ctn-location{
    width:16%;
    padding: 2px 10px;
    display:flex;
    justify-content: left;
}
.user-main-content-list-card-ctn-main-ctn-product-name-desc, .user-main-content-list-card-ctn-main-ctn-no-of-item-desc, .user-main-content-list-card-ctn-main-ctn-no-of-carton-desc, .user-main-content-list-card-ctn-main-ctn-received-date-desc, .user-main-content-list-card-ctn-main-ctn-expiry-date-desc, .user-main-content-list-card-ctn-main-ctn-location-desc{
    margin:auto 0;
    font-size:20px;
}
.user-main-content-list-card-ctn-main-ctn-product-name{
    flex-direction: row;
}
.user-main-content-list-card-ctn-main-ctn-product-name-img-ctn{
    width:80px;
    height:30px;
    border-radius:20px;
}
.user-main-content-list-card-ctn-main-ctn-product-name-img-ctn img{
    width:100%;
    height:100%;
    border-radius: inherit;
}
.user-main-content-list-card-ctn-main-ctn-expiry-date{
    border-radius:50px;
}
</style>