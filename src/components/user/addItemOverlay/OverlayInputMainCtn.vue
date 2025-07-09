<script setup>
import userAddItemOverlayInputDetails from "@/data/user-add-item-overlay-input-details.json";
import OverlayInput from './OverlayInput.vue';
import OverlayInputDrop from './OverlayInputDrop.vue';
</script>

<template>
    <div class="user-add-item-overlay-input-main-ctn-main-ctn">
        <div class="user-add-item-overlay-input-main-ctn-mini-ctn">
            <div class="user-add-item-overlay-input-main-ctn-mini-ctn-category">
                <OverlayInput
                    :name="userAddItemOverlayInputDetails[0].name"
                    :nameFor="userAddItemOverlayInputDetails[0].nameFor"
                    :nameType="userAddItemOverlayInputDetails[0].nameType"
                >
                </OverlayInput>
                <OverlayInputDrop
                    :name="userAddItemOverlayInputDetails[1].name"
                    :nameFor="userAddItemOverlayInputDetails[1].nameFor"
                    :nameType="userAddItemOverlayInputDetails[1].nameType"
                    :nameOptions="userAddItemOverlayInputDetails[1].options"
                >
                </OverlayInputDrop>
            </div>
            <div class="user-add-item-overlay-input-main-ctn-mini-ctn-category">

            </div>
            <div class="user-add-item-overlay-input-main-ctn-mini-ctn-category">
                
            </div>
            <div class="user-add-item-overlay-input-main-ctn-mini-ctn-category">

            </div>
            
        </div>
    </div>
</template>

<style scoped>
.user-add-item-overlay-input-main-ctn-mini-ctn-category{
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap:20px;
}
</style>