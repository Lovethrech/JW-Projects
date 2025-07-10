import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useOverlayImageUploadToggleStore = defineStore('overlayImageUploadToggle', () => {
    // const imageUrl = ref('');
    const inputImgUrl=ref("")
    

    // document.getElementById('image-container').addEventListener('click',()=>{
    //     document.getElementById('image-input').click();
    // });

    return {inputImgUrl};
});