import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserAddItemOverlayModalStore = defineStore('userAddItemOverlayModal', () => {
    const showUserAdditemOverlayDefaultState="none";
    
    const showUserAdditemOverlayActiveState=()=>{
        if (showUserAdditemOverlayDefaultState.value==="none"){
            showUserAdditemOverlayDefaultState.value="block";
        }
    }
    // const defaultMargin = "0";
    // const activeMargin = "-100vw";

    // const WelcomeTabActive = ref({ marginLeft: defaultMargin});
    // const resetMargin = () => {
    //     WelcomeTabActive.value.marginRight = defaultMargin;
    // };

    
    return {showUserAdditemOverlayActiveState, showUserAdditemOverlayDefaultState};
});