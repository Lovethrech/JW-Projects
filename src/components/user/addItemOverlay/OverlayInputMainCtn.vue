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
                <OverlayInputDrop
                    :name="userAddItemOverlayInputDetails[2].name"
                    :nameFor="userAddItemOverlayInputDetails[2].nameFor"
                    :nameType="userAddItemOverlayInputDetails[2].nameType"
                    :nameOptions="userAddItemOverlayInputDetails[2].options"
                >
                </OverlayInputDrop>
                <OverlayInputDrop
                    :name="userAddItemOverlayInputDetails[3].name"
                    :nameFor="userAddItemOverlayInputDetails[3].nameFor"
                    :nameType="userAddItemOverlayInputDetails[3].nameType"
                    :nameOptions="userAddItemOverlayInputDetails[3].options"
                >
                </OverlayInputDrop>
            </div>
            <div class="user-add-item-overlay-input-main-ctn-mini-ctn-category">
                <OverlayInputDrop
                    :name="userAddItemOverlayInputDetails[4].name"
                    :nameFor="userAddItemOverlayInputDetails[4].nameFor"
                    :nameType="userAddItemOverlayInputDetails[4].nameType"
                    :nameOptions="userAddItemOverlayInputDetails[4].options"
                >
                </OverlayInputDrop>
                <OverlayInputDrop
                    :name="userAddItemOverlayInputDetails[5].name"
                    :nameFor="userAddItemOverlayInputDetails[5].nameFor"
                    :nameType="userAddItemOverlayInputDetails[5].nameType"
                    :nameOptions="userAddItemOverlayInputDetails[5].options"
                >
                </OverlayInputDrop>
            </div>
            <div class="user-add-item-overlay-input-main-ctn-mini-ctn-category">
                <OverlayInput
                    :name="userAddItemOverlayInputDetails[6].name"
                    :nameFor="userAddItemOverlayInputDetails[6].nameFor"
                    :nameType="userAddItemOverlayInputDetails[6].nameType"
                >
                </OverlayInput>
                <OverlayInput
                    :name="userAddItemOverlayInputDetails[7].name"
                    :nameFor="userAddItemOverlayInputDetails[7].nameFor"
                    :nameType="userAddItemOverlayInputDetails[7].nameType"
                >
                </OverlayInput>
            </div>
            <div class="user-add-item-overlay-input-main-ctn-mini-ctn-category">
                <OverlayInputDrop
                    :name="userAddItemOverlayInputDetails[8].name"
                    :nameFor="userAddItemOverlayInputDetails[8].nameFor"
                    :nameType="userAddItemOverlayInputDetails[8].nameType"
                    :nameOptions="userAddItemOverlayInputDetails[8].options"
                >
                </OverlayInputDrop>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
.user-add-item-overlay-input-main-ctn-mini-ctn-category{
    margin:20px 0;
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap:20px;
}
</style>