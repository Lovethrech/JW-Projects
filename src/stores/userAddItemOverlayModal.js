import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserAddItemOverlayModalStore = defineStore('userAddItemOverlayModal', () => {
    const productNameDesc=ref("");
    const noOfItems=ref("");
    const noOfCartons=ref("");
    const receivedDate=ref("");
    const expiryDate=ref("");
    const location=ref("");
    const listCards=ref([]);
    const showUserAdditemOverlayDefaultState=ref(false);

    function getRandomColor() {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%";
    }

    const showUserAdditemOverlayActiveState=()=>{
        if (showUserAdditemOverlayDefaultState.value===false){
            showUserAdditemOverlayDefaultState.value=true;
        }
        else{
            showUserAdditemOverlayDefaultState.value=false;
        }
    };   
    
    const addListCard=()=>{
        listCards.value.push({
            id: Math.floor(Math.random() * 100000),
            productNameDesc: productNameDesc.value,
            noOfItems: noOfItems.value,
            noOfCartons: noOfCartons.value,
            receivedDate: receivedDate.value,
            expiryDate: expiryDate.value,
            location: location.value,
            backgroundColor: getRandomColor()
        });
        showModal.value = false;
        productNameDesc.value="";
        noOfItems.value="";
        noOfCartons.value="";
        receivedDate.value="";
        expiryDate.value="";
        location.value="";
    }
    return {productNameDesc, noOfItems, noOfCartons, receivedDate, expiryDate, location, backgroundColor, listCards, showUserAdditemOverlayDefaultState, showUserAdditemOverlayActiveState};
});