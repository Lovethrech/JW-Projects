<template>
    <div class="input-ctn">
        <label for="email" class="name">
            Email
        </label>
        <input 
            v-model="vModel"
            :id="nameId"
            :type="{nameType}"
            @click="iClick"
            @focusout="displayError"
            class="auth-input-page-input-value"
        />
    </div>
</template>