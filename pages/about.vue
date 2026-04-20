<template lang="pug">
.main
    h1(class="text-[36px] text-[rgba(255,0,0,1)]") About Page
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
    title:'About',
    layout:'other'
})

onMounted(()=>{
    console.log('about mounted');
    startLoading('.main', ()=>{
        showLoading.value = false;
    })
})
</script>