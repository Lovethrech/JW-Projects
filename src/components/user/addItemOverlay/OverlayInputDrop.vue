<template>
    <div class="user-add-item-overlay-input-drop-main-ctn">
        <div class="user-add-item-overlay-input-drop-mini-ctn">
            <label 
                for="nameFor" 
                class="user-add-item-overlay-input-drop-mini-ctn-input-ctn-name"
            >
                product type
            </label>
            <select 
                id="nameFor"
                type="nameType"
                class="user-add-item-overlay-input-drop-mini-ctn-input"
            >
                <option value="1" class="user-add-item-overlay-input-drop-mini-ctn-input-option">Product Type</option>
            </select>
        </div>
    </div>
</template>

<style scoped>
.user-add-item-overlay-input-drop-main-ctn{
    width:50%;
}
.user-add-item-overlay-input-drop-mini-ctn-input-ctn-name{
    color:#6a6a6a;
    font-size:12px;
    font-weight: 400;
    letter-spacing: 0.25px;
    text-transform: capitalize;
}
.user-add-item-overlay-input-drop-mini-ctn-input{
    background-color: transparent;
    color:hsla(0, 0%, 0%, 0.63);
    width:100%;
    height:40px;
    padding:4px;
    font-size:16px;
    border: 3px solid #d9d9d9;
    border-radius: 8px;
}
</style>