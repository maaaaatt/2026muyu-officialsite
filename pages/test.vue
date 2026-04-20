<template lang="pug">
.main
    h1(class="text-[36px] text-[rgba(255,0,0,1)]") About Page {{ abc.def }}
</template>
<script setup>
import { startLoading } from '@/utils';
const showLoading = inject('showLoading');
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