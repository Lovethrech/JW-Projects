import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useOverlayImageUploadToggleStore = defineStore('overlayImageUploadToggle', () => {
    // const imageUrl = ref('');
    const inputImgUrl=ref("");
    const showInputtedImage=ref(false);
    

    // document.getElementById('image-container').addEventListener('click',()=>{
    //     document.getElementById('image-input').click();
    // });

    return {inputImgUrl, showInputtedImage};
});