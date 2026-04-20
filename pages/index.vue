<template lang="pug">
.main
    h1(class="text-[36px] text-[#abcdef]") Index Page
    UiButtonText(href="https://google.com") Text Button
    UiButtonOutline(href="https://google.com") Outline Button
    p 動態載入圖片
    img(:src="imgLogo", class="mb-[15px] w-[300px]")

    p api載入圖片
    ul(class="flex")
        li(v-for="item in bannerData", class="text-center mx-[10px]")
            a(:href="item.link")
                picture
                    source(:srcset="item.image.dsk", media="(min-width:996px)")
                    img(:src="item.image.mob", class="w-[300px]")
                span {{ item.title }}
</template>
<script setup>
import { startLoading, foo } from '@/utils';
// assets
import imgLogo from 'assets/images/logo.png';

// vue use
const route = useRoute();
const store = useSiteInfoStore();
const config = useRuntimeConfig();
const { $emit, $on } = useNuxtApp();

// vue inject
const showLoading = inject('showLoading');

// vue vars

// app vars
const { apiPath, rootPath } = config.public;

const {data:siteInfoResData} = await useApi('SiteInfo');
const metaTitle = ref(siteInfoResData.value.data.meta.title);

const {data:bannerResData} = await useApi('SiteBannerList?brand=kuno&page=home');
const bannerData = reactive(bannerResData.value.data);

useHead({
    title:metaTitle,
    titleTemplate: `%s - ${store.meta.title}`
    
});

onMounted(()=>{
    console.log('index mounted');
    startLoading('.main', ()=>{
        showLoading.value = false;
        setTimeout(()=>{
            $emit('indexEvent', 'hello');
        }, 1000)
    });
})
</script>