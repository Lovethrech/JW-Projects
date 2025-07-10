import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useOverlayImageUploadToggleStore = defineStore('overlayImageUploadToggle', () => {
    const imageInput = ref(null);
    const previewUrl = ref('');

    const triggerImageUpload=()=>{
        imageInput.value && imageInput.value.click();
    }

    function onImageChange(event) {
        const file = event.target.files[0]
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader()
            reader.onload = (e) => {
            previewUrl.value = e.target.result
            }
            reader.readAsDataURL(file)
        } else {
            previewUrl.value = ''
        }
    };
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
    return {triggerImageUpload, onImageChange, imageInput, previewUrl};
});