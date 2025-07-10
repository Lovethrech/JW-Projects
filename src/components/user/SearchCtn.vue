<template>
    <div class="user-search-ctn-main-ctn">
        <div class="user-search-ctn-mini-ctn">
            <div class="user-search-ctn-main-ctn-icon-ctn">
                <i class="ri-search-line"></i>
            </div>
            <input type="text" placeholder="Search for item" class="user-search-ctn-mini-ctn-input"/>
        </div>
    </div>
</template>
<style scoped>
.user-search-ctn-main-ctn, .user-search-ctn-mini-ctn{
    width:100%;
}
.user-search-ctn-mini-ctn, .user-search-ctn-main-ctn-icon-ctn{
    display:flex;
}
.user-search-ctn-mini-ctn{
    flex-direction: row;
}
.user-search-ctn-main-ctn-icon-ctn{
    color:#d9d9d9;
    margin-right:-26px;
    place-items: center;
}
.user-search-ctn-mini-ctn-input{
    width:100%;
    background-color: transparent;
    padding:10px 30px;
    border: 2px solid #ededed;
}
</style>