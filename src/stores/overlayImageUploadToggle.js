import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useOverlayImageUploadToggleStore = defineStore('overlayImageUploadToggle', () => {
    const imageUrl = ref('');
    function handleImageUpload(event) {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.style.display = 'none';


        const file = event.target.files[0]
        if (file && file.type.startsWith('image/')) {
            imageUrl.value = URL.createObjectURL(file)
        }
        else {
            imageUrl.value = ''
        }
    }

    
    return {imageUrl, handleImageUpload};
});