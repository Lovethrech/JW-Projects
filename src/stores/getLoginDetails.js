import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useOverlayImageUploadToggleStore = defineStore('overlayImageUploadToggle', () => {
    // const imageUrl = ref('');
    const inputImgUrl=ref("");
    const showInputtedImage=ref(true);

    const handleImageUpload=()=>{
        if (inputImgUrl.value===""){
            showInputtedImage.value=false;
            console.log(inputImgUrl);
        }
    }

    return {inputImgUrl, showInputtedImage, handleImageUpload};
});