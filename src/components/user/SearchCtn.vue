<template>
    <div class="user-search-ctn-main-ctn">
        <div class="user-search-ctn-mini-ctn">
            <div class="user-search-ctn-main-ctn-icon-ctn">
                <img src="@/components/Icons/search-icon.svg" alt="">
            </div>
            <input type="text" placeholder="Search for item" class="user-search-ctn-mini-ctn-input"/>
        </div>
    </div>
</template>
<style scoped>
.user-search-ctn-main-ctn, .user-search-ctn-mini-ctn{
    width:100%;
}
.user-search-ctn-mini-ctn{
    display:flex;
    flex-direction: row;
}
.user-search-ctn-main-ctn-icon-ctn{
    margin-right:-26px;
    display:flex;
    place-items: center;
}
.user-search-ctn-mini-ctn-input{
    width:100%;
    background-color: transparent;
    padding:10px 30px;
    border: 3px solid #ededed;
}
</style>