<template lang="pug">
.main
    section.top(class="relative w-full h-[calc(100vh-140px)] lg:h-[calc(100vh-128px)] overflow-hidden bg-white")
        .container(class="relative w-full h-full flex justify-center items-center")
</template>
<style lang="scss" scoped>
section.top {
}
</style>
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
const selectedItem = ref('');

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
const setSelectedItem = (itemName)=>{
	if (selectedItem.value==itemName)selectedItem.value = '';
	else selectedItem.value = itemName;
}
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