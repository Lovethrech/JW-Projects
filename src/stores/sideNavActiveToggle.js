import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSideNavActiveToggleStore = defineStore('sideNavActiveToggle', () => {
    const defaultBgColor=ref("transparent");
    const activeBgColor=ref("#ffffff");

    const homeStyle=ref({backgroundColor: activeBgColor});
    const integrateStyle=ref({backgroundColor: defaultBgColor});
    const reportStyle=ref({backgroundColor: defaultBgColor});

    const resetStyles=()=>{
        homeStyle.value.backgroundColor=activeBgColor;
        integrateStyle.value.backgroundColor=defaultBgColor;
        reportStyle.value.backgroundColor=defaultBgColor;
    }
    // const defaultMargin = "0";
    // const activeMargin = "-100vw";

    // const WelcomeTabActive = ref({ marginLeft: defaultMargin});
    // const resetMargin = () => {
    //     WelcomeTabActive.value.marginRight = defaultMargin;
    // };

    // const shiftTab=()=>{
    //     if (WelcomeTabActive.value.marginRight===defaultMargin){
    //         WelcomeTabActive.value.marginRight=activeMargin;
    //     }
    //     else{
    //         resetMargin();
    //     }
    // }
    return {homeStyle, integrateStyle, reportStyle};
});