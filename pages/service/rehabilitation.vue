<template lang="pug">
.main
    section.top(class="w-full h-[210px] lg:h-[180px] bg-[url(assets/images/service/banner.svg)] bg-[length:110%_auto] bg-[length:648px_auto] bg-white bg-[center_20%] md:bg-[center_25px] bg-no-repeat")
    
    section.content
        uiHeadingSectionTitle(class="-mt-[72px] md:-mt-[43px]")
            template(v-slot:title) 復健科醫生
            template(v-slot:description) 復健科醫師負責整體評估孩子的發展狀況，提供精準診斷並規劃個別化復健治療方向。<br>同時整合物理、職能、語言與心理等跨專業團隊，持續追蹤與調整治療，確保孩子在最佳時機獲得最適合的幫助。
        .container(class="max-w-[580px] mx-auto")
            p.text(class="p-[40px]")
                |在孩子成長的每一步，由復健科醫師全程把關，從動作發展、語言能力到行為與認知，進行整體評估與精準診斷。醫師不僅負責開立治療處方，更統籌物理、職能、語言與心理等跨專業團隊，為每位孩子量身打造最適合的復健計畫。結合小兒科醫師的健康照護，讓發展與醫療同步守護，避免延誤黃金治療時機。<br>
                br
                |在這裡，我們以兒童為核心，提供安全、溫暖且專業的全方位復健環境，讓家長安心、孩子放心成長。
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