<template lang="pug">
.main
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

// const {data:siteInfoResData} = await useApi('SiteInfo');
// const metaTitle = ref(siteInfoResData.value.data.meta.title);
const metaTitle = ref('index');

// const {data:bannerResData} = await useApi('SiteBannerList?brand=kuno&page=home');
// const bannerData = reactive(bannerResData.value.data);

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