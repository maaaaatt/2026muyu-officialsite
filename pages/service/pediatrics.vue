<template lang="pug">
.main
    section.top(class="w-full h-[210px] lg:h-[180px] bg-[url(assets/images/service/banner.svg)] bg-[length:110%_auto] bg-[length:648px_auto] bg-white bg-[center_20%] md:bg-[center_25px] bg-no-repeat")
    
    section.content
        uiHeadingSectionTitle(class="-mt-[72px] md:-mt-[43px]")
            template(v-slot:title) 小兒科醫生
            template(v-slot:description) 醫師看診，讓家長們可以在診所內同時解決常見的感冒或是其他兒童疾病處置、兒童疫苗注射等。
        .container(class="max-w-[580px] mx-auto")
            p.text(class="p-[40px]")
                |為提供更完整且連貫的兒童照護，我們特別增聘小兒專科醫師，與復健團隊緊密合作，打造一站式整合醫療服務。讓孩子在同一個診所就能同時完成疾病評估與發展照護，減少家長奔波不便。<br>
                br
                |提供全方位診療，無論是感冒、過敏，或是生長發育與預防保健，都能即時評估並銜接復健治療。透過小兒醫師與治療團隊的緊密合作，更精準掌握孩子整體發展狀況，及早發現問題並制定個別化治療與照護計畫，大幅提升療效與照護效率。
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

// const {data:bannerResData} = await useApi('SiteBannerList?brand=kuno&page=home');
// const bannerData = reactive(bannerResData.value.data);

definePageMeta({
    title:'小兒科醫生',
})

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