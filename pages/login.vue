<template lang="pug">
h1(class="text-[36px] text-[rgba(255,0,0,1)]") Login Page / loginStatus: {{ store.loginStatus }}
a(href="#", @click.prevent="store.login(1)", class="underline m-[10px] table bg-black text-white px-[10px] py-[5px]", v-if="!store.loginStatus") login
a(href="#", @click.prevent="store.login(0)", class="underline m-[10px] table bg-[rgba(255,0,0,1)] text-white px-[10px] py-[5px]", v-else) logout
</template>
<script setup>
import { startLoading } from '@/utils';
import { useSiteInfoStore } from '@/stores';

// vue use
const store = useSiteInfoStore();

// vue inject
const showLoading = inject('showLoading');

// vue vars
// app vars
// function

definePageMeta({
    title:'Login',
    layout:'other'
})
onMounted(()=>{
    startLoading('.main', ()=>{
        showLoading.value = false;
        console.log('member mounted');
    })
})
</script>