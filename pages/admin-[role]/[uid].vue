<template lang="pug">
.main
    h1(class="text-[36px] text-[rgba(255,0,0,1)]") Category Page
    p Role: {{ route.params.role }} / Uid: {{  route.params.uid }}
</template>
<script setup>
import { startLoading } from '@/utils';
const showLoading = inject('showLoading');
const route = useRoute();
definePageMeta({
    title:'Category'
})

onMounted(()=>{
    console.log('category mounted');
    startLoading('.main', ()=>{
        showLoading.value = false;
    })
})
</script>