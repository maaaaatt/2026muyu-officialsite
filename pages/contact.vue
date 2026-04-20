<template lang="pug">
.main
    h1(class="text-[36px] text-[rgba(255,0,255,1)]") Concat Page
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
    title:'Contact',
    layout:'other',
})
onMounted(()=>{
    startLoading('.main', ()=>{
        showLoading.value = false;
        console.log('contact mounted');
    })
})
</script>