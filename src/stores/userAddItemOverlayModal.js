import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserAddItemOverlayModalStore = defineStore('userAddItemOverlayModal', () => {
    const showUserAdditemOverlayDefaultState=ref(false);
    
    const showUserAdditemOverlayActiveState=()=>{
        if (showUserAdditemOverlayDefaultState.value===false){
            showUserAdditemOverlayDefaultState.value=true;
        }
    }
    // const defaultMargin = "0";
    // const activeMargin = "-100vw";

    // const WelcomeTabActive = ref({ marginLeft: defaultMargin});
    // const resetMargin = () => {
    //     WelcomeTabActive.value.marginRight = defaultMargin;
    // };

    
    return {showUserAdditemOverlayDefaultState, showUserAdditemOverlayActiveState};
});