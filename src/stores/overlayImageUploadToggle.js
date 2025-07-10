import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useOverlayImageUploadToggleStore = defineStore('overlayImageUploadToggle', () => {
    // const imageUrl = ref('');
    const inputImgUrl=ref("");
    const showInputtedImage=ref(false);

    const handleImageUpload=()=>{
        if (inputImgUrl.value===""){
            showInputtedImage.value=true;
        }
    }

    return {inputImgUrl, showInputtedImage};
});