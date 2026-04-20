<template lang="pug">
h1(class="text-[36px] text-[rgba(255,0,0,1)]") Member Page
</template>
<script setup>
import { startLoading } from '@/utils';

// vue use
// vue inject
const showLoading = inject('showLoading');

// vue vars
// app vars
// function

definePageMeta({
    title:'Member',
    layout:'other',
    middleware:'chk-login'
})
onMounted(()=>{
    startLoading('.main', ()=>{
        showLoading.value = false;
        console.log('member mounted');
    })
})
</script>