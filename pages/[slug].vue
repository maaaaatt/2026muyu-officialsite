<template lang="pug">
.main(class="w-full h-full flex justify-center items-center")
    .con
        h1(class="text-[36px] font-bold text-[#ccc] mb-[15px]") 404
            span(class="ml-[10px] text-[#C75B7A] text-[30px]") Page Not Found
        p(class="mb-[15px]") The resource requested could not be found on this server!
        a(href="#", @click.prevent="handleError", class="underline hover:no-underline") Go to Home
</template>
<script setup>
import { startLoading } from '@/utils';
const showLoading = inject('showLoading');
const store = useSiteInfoStore();
definePageMeta({
    title:'404',
})
onMounted(()=>{
    startLoading('.main', ()=>{
        showLoading.value = false;
        console.log('member mounted');
    })
})
</script>