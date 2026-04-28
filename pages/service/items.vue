<template lang="pug">
.main
    section.top(class="w-full h-[180px] bg-[url(assets/images/service/banner.svg)] bg-[length:auto_110px] bg-[length:648px_auto] bg-white bg-[center_20%] md:bg-[center_25px] bg-no-repeat")
    
    section.content
        uiHeadingSectionTitle(class="-mt-[38px] md:-mt-[43px] mb-[30px]")
            template(v-slot:title) 復健治療項目
        .container(class="mx-auto")
            .card(v-for="item in contentData")
                uiCollapse
                    template(v-slot:btn)
                        h2.h2(class="text-primary mb-[10px]")
                            img(:src="getImgUrl(`icon_${item.icon}.svg`)", class="w-[43px] inline-block align-bottom mr-[10px]")
                            |{{item.title}}
                        i.h2(class="bi bi-chevron-down text-primary leading-[1]")
                    template(v-slot:content)
                        h3.title(class="text-primary py-[5px]") {{item.subTitle}}
                        p.text(class="pt-[2px] pb-[10px]") {{item.desc}}
                        uiCollapse
                            template(v-slot:btn)
                                h3.title 核心目標
                                i.title(class="bi bi-plus")
                                i.title(class="bi bi-dash")
                            template(v-slot:content)
                                p.text {{item.goal}}
                        uiCollapse
                            template(v-slot:btn)
                                h3.title 服務對象
                                i.title(class="bi bi-plus")
                                i.title(class="bi bi-dash")
                            template(v-slot:content)
                                ol
                                    li.text(v-for="target in item.target") {{target}}
                        uiCollapse
                            template(v-slot:btn)
                                h3.title 常見評估
                                    span.text(class="font-normal", v-if="item.title=='物理治療師PT'") （依年齡與狀況擇用）
                                i.title(class="bi bi-plus")
                                i.title(class="bi bi-dash")
                            template(v-slot:content)
                                ol
                                    li.text(v-for="assess in item.assess") {{assess}}
                        uiCollapse
                            template(v-slot:btn)
                                h3.title 溫柔陪伴
                                i.title(class="bi bi-plus")
                                i.title(class="bi bi-dash")
                            template(v-slot:content)
                                ol
                                    li.text(v-for="partner in item.partner") {{partner}}
                        uiCollapse
                            template(v-slot:btn)
                                h3.title 日常練習
                                i.title(class="bi bi-plus")
                                i.title(class="bi bi-dash")
                            template(v-slot:content)
                                ol(v-if="item.practise.length>1")
                                    li.text(v-for="practise in item.practise") {{practise}}
                                p.text(v-else) {{item.practise[0]}}

</template>
<style lang="scss" scoped>
section.top {
}
section.content {
    .container {
        @apply px-[15px];
    }
    .card {
        @apply rounded-[15px] bg-white p-[15px] mb-[15px];
        > .m-collapse {
            :deep(.btn-expand) {
                @apply flex justify-between items-center;
            }

            .m-collapse  {
                @apply border-t-[1px] border-solid border-black py-[15px];
                :deep(.btn-expand) {
                    @apply flex justify-between items-center;
                }
            }

            ol, p.text {
                @apply pt-[10px];
                li {
                    @apply list-disc ml-[30px];
                }
            }
        }
    }
}
</style>
<script setup>
import { startLoading, getImgUrl } from '@/utils';
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
const contentData = reactive([
    {
        icon:'lake',
        title:'物理治療師PT',
        subTitle:'大動作、姿勢與移動的專家',
        desc:'陪孩子練動作、走得穩，避免跌倒，在探索世界更安全。',
        goal:'讓孩子「更穩、更能動」，提升自我動力及參與日常活動之動機。',
        target:[
            '粗大動作遲緩（翻身、坐、爬、站、走較慢）',
            '肌張力異常、腦性麻痺、早產兒姿勢與動作控制',
            '步態異常、頻跌、平衡協調差、單腳站不穩',
            '關節活動受限、肌力不足、姿勢不良',
            '骨折術後、運動傷害'
        ],
        assess:[
            '皮巴迪動作發展量表第三版（評估嬰幼兒粗大與精細動作能力）',
            '平衡與協調測試、步態觀察與影片分析',
            '肌力、關節活動度、肌張力與反射檢查',
        ],
        partner:[
            '姿勢控制與動作品質訓練（爬、跪、站、轉移、行走）',
            '平衡與協調、核心肌群與上／下肢肌力訓練',
            '功能導向任務訓練：把練習放在「真實情境」',
        ],
        practise:[
            '學習 2–3 個日常可執行的動作練習（每次 5–10 分鐘）',
            '配合環境調整',
        ]
    },
    {
        icon:'dock',
        title:'職能治療師OT',
        subTitle:'日常功能、感覺處理與精細動作的專家',
        desc:'訓練孩子生活技能，從穿衣吃飯到學習專注，提升獨立性。',
        goal:'讓孩子「能自己做、做得好、願意做」，提升自理能力與學習參與。',
        target:[
            '精細動作（手部操作、雙手協調、鉛筆握姿）落後',
            '感覺處理問題（過度敏感或反應遲鈍、容易崩潰或亢奮）',
            '自理能力困難：吃飯、穿脫衣、如廁、整理書包',
            '執行功能與注意力（規劃、轉換、等待、完成任務）',
            '遊戲技巧不足、同儕互動與課堂參與困難',
        ],
        assess:[
            '精細動作與雙手協調、視覺動作整合',
            '感覺處理問題與臨床觀察（觸覺、前庭、本體覺等）',
            '日常活動（ADL）清單與功能評量',
            '課桌椅與握筆姿勢、書寫前技能觀察',
        ],
        partner:[
            '感覺整合理念下的「功能導向」活動設計（盪、推、拉、爬＋任務）',
            '手部操作與工具使用（剪刀、積木、扣釦、拉鍊、餐具）',
            '活動步驟拆解與視覺提示（流程卡、計時器、代幣制度）',
            '課堂參與策略（坐姿、注意力切換、任務分段）',
            '環境調整與輔具（握筆器、傾斜板、座椅支撐）',
        ],
        practise:[
            '帶回 1–2 項「日常化」任務（吃飯＋穿衣／書包整理），用固定提示與回饋；每週回報可調整策略'
        ]
    },
    {
        icon:'deer',
        title:'語言治療師ST',
        subTitle:'語言、溝通與進食吞嚥的專家',
        desc:'幫助孩子敢說、會說、能互動，也照顧吃飯與吞嚥的安全。',
        goal:'讓孩子「理解得更多、表達得更好、願互動」，並確保進食安全。',
        target:[
            '語言理解／表達發展遲緩兒童、詞彙少、不主動說，發音（構音）不清、口腔動作協調差、說話不流暢、兒童嗓音異常',
            '遊戲中的輪替能力、眼神接觸、共同注意力、語用能力較弱',
            '進食／吞嚥：嗆咳、食物質地選擇、偏食、口腔感覺問題',
            '有溝通輔具（AAC）需求之兒童：圖片交換、溝通板、平板溝通 App',
        ],
        assess:[
            '語言理解及表達能力評估、語用能力 / 互動觀察',
            '構音與口腔動作評估、語暢異常（口吃）評估、兒童嗓音異常評估',
            '進食安全與效率評估（含咀嚼、口腔感覺）',
        ],
        partner:[
            '自然情境與遊戲中的語言教學（詞彙、指令理解等⋯⋯）',
            '社交溝通訓練（輪替、表達需求、眼神接觸、模仿、情境腳本）',
            '構音訓練及類化至不同情境中',
            '吞嚥介入（質地調整、姿勢與餐具、口腔動作訓練及增加口腔感覺）',
            '溝通輔具介入（選型、介面設計、在不同情境中使用）',
            '居家練習活動衛教',
        ],
        practise:[
            '可將治療師衛教之技巧及活動運用在日常生活不同情境中'
        ]
    },
]);

// app vars
const { apiPath, rootPath } = config.public;

// const {data:siteInfoResData} = await useApi('SiteInfo');
// const metaTitle = ref(siteInfoResData.value.data.meta.title);

// const {data:bannerResData} = await useApi('SiteBannerList?brand=kuno&page=home');
// const bannerData = reactive(bannerResData.value.data);

definePageMeta({
    title:'復健科醫生',
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