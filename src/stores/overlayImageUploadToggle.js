import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useOverlayImageUploadToggleStore = defineStore('overlayImageUploadToggle', () => {
    const imageUrl = ref('');
    function handleImageUpload(event) {
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