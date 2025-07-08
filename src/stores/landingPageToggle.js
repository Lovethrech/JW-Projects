import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSideNavColorStore = defineStore('sideNavColor', () => {
    const defaultMargin = "0";
    const activeMargin = "-100vw";

    const WelcomeTabActive = ref({ marginRight: activeMargin});
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