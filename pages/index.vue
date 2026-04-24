<template lang="pug">
.main
    section.top(class="relative w-full h-[calc(100vh-140px)] lg:h-[calc(100vh-128px)] overflow-hidden bg-white")
        .container(class="relative w-full h-full flex justify-center items-center")
            img.m1(src="assets/images/home/top_m1.svg", class="absolute left-[-121px] top-[51px] w-[337px]")
            img.m2(src="assets/images/home/top_m2.svg", class="absolute -right-[90px] top-[132px] w-[214px]")
            img.m3(src="assets/images/home/top_m3.svg", class="absolute left-[-53px] bottom-[90px] w-[247px]")
            img.m4(src="assets/images/home/top_m4.svg", class="absolute -right-[70px] -bottom-[25px] w-[247px]")
            .box
                img.logo(src="assets/images/home/logo.svg", class="w-[150px] lg:w-[233px] mx-auto mb-[30px]")
                .mob(class="lg:hidden")
                    ul
                        li(v-for="item in store.nav", :class="{'active':selectedItem==item.name}")
                            a.h2(href="#", @click.prevent="setSelectedItem(item.name)")
                                span {{item.name}}
                                i(class="bi bi-chevron-down")
                            ol(v-if="item.subnav", class="hidden")
                                li(v-for="subItem in item.subnav")
                                    a.title(:href="subItem.link")
                                        img(src="assets/images/icon_disc.svg", class="w-[12px]")
                                        |{{subItem.name}}
                .dsk(class="hidden lg:block w-[845px] mx-auto")
                    p.title(class="text-primary text-center my-[30px]") 在沐語，孩子能獲得專業復健，父母能找到理解與力量。<br>讓我們一起守護孩子的未來。
                    .menu(class="mb-[20px]")
                        ul
                            li
                                a.h2(href="#")
                                    img(src="assets/images/icon_deer.svg")
                                    span 關於沐語
                            li
                                a.h2(href="#")
                                    img(src="assets/images/icon_dock.svg")
                                    span 就診指引
                            li
                                a.h2(href="#")
                                    img(src="assets/images/icon_lake.svg")
                                    span 線上掛號
                            li
                                a.h2(href="#")
                                    img(src="assets/images/icon_mountain.svg")
                                    span 最新消息
                    .service(class="flex flex-col rounded-[15px] bg-primary p-[20px]")
                        h2.h2(class="text-white text-center gap-[5px] mb-[20px]") 我們的服務
                        ul
                            li
                                a.h2(href="#")
                                    span 復健科
                            li
                                a.h2(href="#")
                                    span 小兒科
                            li
                                a.h2(href="#")
                                    span 復健治療項目
                            li
                                a.h2(href="#")
                                    span 特色輔助復健
    
    section.openning(class="relative bg-white")
        picture
            source(srcset="assets/images/home/wave_lg.svg", media="(min-width:996px)")
            img(src="assets/images/home/wave.svg", class="w-full block")
        img.mountain(src="assets/images/home/icon_mountain.svg", class="absolute -left-[18px] -top-[20px] w-[141px]")
        .bg-wrap(class="bg-secondary")
            .container(class="max-w-[780px] px-[35px] lg:px-0 mx-auto")
                .row(class="lg:grid lg:gap-x-[30px] lg:grid-cols-2")
                    .col(class="lg:px-[30px]")
                        .schedule(class="mb-[10px]")
                            h2.h2(class="text-primary mb-[10px]") 營業時間
                            dl(class="!border-0 !pt-0")
                                dt
                                dd 一
                                dd 二
                                dd 三
                                dd 四
                                dd 五
                                dd 六
                                dd 日
                            dl
                                dt 08:30-12:00
                                dd.open
                                dd.open
                                dd.open
                                dd.open
                                dd.open
                                dd.close
                                dd.close
                            dl
                                dt 13:00-17:30
                                dd.open
                                dd.open
                                dd.open
                                dd.open
                                dd.open
                                dd.close
                                dd.close
                            ul
                                li.caption(class="mr-[20px]")
                                    img(src="assets/images/home/dot_orange.svg")
                                    |營業
                                li.caption
                                    img(src="assets/images/home/dot_outline_orange.svg")
                                    |休診
                        .schedule(class="mb-[10px]")
                            h2.h2(class="text-primary mb-[10px]") 門診時間
                            dl(class="!border-0 !pt-0")
                                dt
                                dd 一
                                dd 二
                                dd 三
                                dd 四
                                dd 五
                                dd 六
                                dd 日
                            dl
                                dt 09:00-12:00
                                dd.kids
                                dd.close
                                dd.kids
                                dd.rehab
                                dd.kids
                                dd.close
                                dd.close
                            dl
                                dt 14:00-17:00
                                dd.close
                                dd.rehab
                                dd.close
                                dd.kids
                                dd.close
                                dd.close
                                dd.close
                            ul
                                li.caption(class="mr-[20px]")
                                    img(src="assets/images/home/dot_primary.svg")
                                    |小兒科門診
                                li.caption
                                    img(src="assets/images/home/dot_brown.svg")
                                    |復健科門診
                        .quicklink(class="flex flex-wrap justify-center items-center gap-[10px] p-[20px] mb-[40px]")
                            uiButtonRounded 線上掛號
                            uiButtonRounded 撥打電話
                            uiButtonRoundedOutline <img src="assets/images/home/icon_att.svg">最新門診表及異動資訊
                        .pharmacy(class="hidden lg:block")
                            h2.h2(class="text-primary mb-[15px]") 領藥地址
                            h3.title(class="text-accentHeavy") 家得福藥局
                            p.text(class="mb-[5px]") 新北市新店區安康路二段 123 號
                            uiButtonRounded.brown(class="mb-[10px]") 立即導航
                    .col(class="lg:px-[30px]")
                        .traffic(class="mb-[30px]")
                            h2.h2(class="text-primary mb-[10px]") 診所地址
                            p.text(class="mb-[5px]") 新北市新店區安康路二段 127 號 1 樓
                            uiButtonRounded.brown(class="mb-[10px]") 立即導航
                            img(src="assets/images/home/map.svg", class="w-full block mb-[10px]")
                            dl(class="mb-[10px]")
                                dt.title(class="text-accentHeavy") 搭乘公車
                                dd.text
                                    img(src="assets/images/home/icon_bus.svg", class="inline-block w-[12px] mr-[5px]")
                                    |公崙新村(豐榮醫院)站下車，步行140公尺
                            dl(class="mb-[10px]")
                                dt.title(class="text-accentHeavy") 搭乘輕軌
                                dd.text
                                    img(src="assets/images/home/icon_bus.svg", class="inline-block w-[12px] mr-[5px]")
                                    |安康站下車，步行900公尺
                            dl
                                dt.title(class="text-accentHeavy") 停車資訊
                                dd.text
                                    img(src="assets/images/home/icon_p.svg", class="inline-block w-[14px] mr-[5px]")
                                    |安康立體停車場
                                dd.text
                                    img(src="assets/images/home/icon_p.svg", class="inline-block w-[14px] mr-[5px]")
                                    |博客停車場
                                dd.text
                                    img(src="assets/images/home/icon_p.svg", class="inline-block w-[14px] mr-[5px]")
                                    |安德街平面停車場
                        .pharmacy(class="lg:hidden")
                            h2.h2(class="text-primary mb-[10px]") 領藥地址
                            h3.title(class="text-accentHeavy") 家得福藥局
                            p.text(class="mb-[5px]") 新北市新店區安康路二段 123 號
                            uiButtonRounded.brown(class="mb-[10px]") 立即導航

</template>
<style lang="scss" scoped>
section.top {
    .mob {
        ul {
            > li {
                @apply relative w-[250px] px-[20px] py-[10px] mb-[15px] bg-[url(assets/images/home/btn_bg.svg)] bg-[length:100%_100%];
                > a {
                    @apply relative w-full flex justify-between items-center py-[5px] text-white;
                }
    
                &.active {
                    > a {
                        i {
                            @apply scale-y-[-1];
                        }
                    }
                }
    
                &:last-child {
                    @apply mb-0;
                }
            }
    
            ol {
                @apply lg:min-w-full lg:px-0 lg:absolute lg:left-0 lg:top-full lg:bg-primary lg:rounded-b-[20px];
                li {
                    @apply mx-0;
                    a {
                        @apply text-white flex justify-start items-start lg:px-[30px] py-[10px] lg:py-[15px] lg:text-secondary lg:whitespace-nowrap;
                        img {
                            @apply mr-[10px] mt-[8px] lg:hidden;
                        }
                    }
                }
            }
        }
    }

    .dsk {
        .menu {
            ul {
                @apply flex justify-between items-center;
                li {
                    @apply w-[200px] bg-[url(assets/images/home/btn_bg.svg)] bg-[length:100%_100%];
                    a {
                        @apply relative text-white flex justify-center items-center gap-[10px] px-[20px] py-[10px];
                        &:before {
                            @apply absolute left-0 top-0 w-full h-full bg-[url(assets/images/home/btn_bg_hover.svg)] bg-[length:100%_100%] content-[""] block opacity-0 transition-all duration-300;
                        }
                        span {
                            @apply relative;
                        }
                        img {
                            @apply relative h-[37px];
                        }

                        &:hover {
                            @apply bg-transparent;
                            &:before {
                                @apply opacity-100;
                            }
                        }
                    }
                }
            }
        }

        .service {
            ul {
                @apply flex justify-center items-center gap-[10px];
                li {
                    @apply w-[157px] bg-[url(assets/images/home/btn_bg_secondary.svg)] bg-[length:100%_100%];
                    a {
                        @apply relative text-primary whitespace-nowrap flex justify-center items-center px-[20px] py-[10px];
                        &:before {
                            @apply absolute left-0 top-0 w-full h-full bg-[url(assets/images/home/btn_bg_secondary_hover.svg)] bg-[length:100%_100%] content-[""] block opacity-0 transition-all duration-300;
                        }
                        span {
                            @apply relative;
                        }
                        &:hover {
                            @apply bg-transparent text-secondary;
                            &:before {
                                @apply opacity-100;
                            }
                        }
                    }
                }
            }
        }
    }
}

section.openning {
    .h2 {
        @apply py-[5px];
    }

    .title, .text {
        @apply py-[3px];
    }

    .schedule {
        dl {
            @apply flex py-[15px] border-b-[1px] border-solid border-accentHeavy;
            dt, dd {
                @apply text-[14px] text-black;
            }
            dt {
                @apply w-[110px];
            }
    
            dd {
                @apply w-[18px] h-[16px] bg-cover bg-no-repeat mx-[5px] text-center;
                &.open {
                    @apply bg-[url(assets/images/home/dot_orange.svg)];
                }
                &.kids {
                    @apply bg-[url(assets/images/home/dot_primary.svg)];
                }
                &.rehab {
                    @apply bg-[url(assets/images/home/dot_brown.svg)];
                }
                &.close {
                    @apply bg-[url(assets/images/home/dot_outline_orange.svg)];
                }
            }
        }

        ul {
            @apply flex justify-end pt-[15px];
            li {
                img {
                    @apply inline-block mr-[5px] w-[18px];
                }
            }
        }
    }
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

watch(selectedItem, ()=>{
	nextTick(()=>{
		$('section.top ul > li').each((idx,item)=>{
			if ($(item).hasClass('active'))$(item).find('ol').slideDown(400);
			else $(item).find('ol').slideUp(400);
		})
	})
})
</script>