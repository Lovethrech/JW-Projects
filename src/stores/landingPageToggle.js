import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useWelcomeTabToggleStore = defineStore('welcomeTabToggle', () => {
    const defaultMargin = "0";
    const activeMargin = "-100vw";

    const WelcomeTabActive = ref({ marginLeft: activeMargin});
        const resetMargin = () => {
        WelcomeTabActive.value.marginRight = defaultMargin;
    };

    const shiftTab=()=>{
        if (WelcomeTabActive.value.marginRight===defaultMargin){
            WelcomeTabActive.value.marginRight=activeMargin;
        }
        else{
            resetMargin();
        }
    }
    return {shiftTab,WelcomeTabActive};
});