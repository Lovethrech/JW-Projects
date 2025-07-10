import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserAddItemOverlayModalStore = defineStore('userAddItemOverlayModal', () => {
    const showUserAdditemOverlayDefaultState=ref(false);
    
    const showUserAdditemOverlayActiveState=()=>{
        if (showUserAdditemOverlayDefaultState.value===false){
            showUserAdditemOverlayDefaultState.value=true;
        }
        else{
            showUserAdditemOverlayDefaultState.value=false;
        }
    }    
    return {showUserAdditemOverlayDefaultState, showUserAdditemOverlayActiveState};
});