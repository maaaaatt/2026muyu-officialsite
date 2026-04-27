<template lang="pug">
.main
    section.top(class="bg-[url(assets/images/about/banner_bg.jpg)] bg-center bg-[length:auto_100%]")
        .container(class="mx-auto")
            img(src="assets/images/about/team.png", class="max-h-[285px] block mx-auto")

    section.origin(class="bg-primary")
        .container(class="px-[10px] py-[30px] md:pb-[50px] mx-auto")
            .box(class="rounded-[20px] bg-white p-[20px] max-w-[600px] mx-auto")
                a.btn-expand(href="#", class="p-[10px] flex justify-between", @click.prevent="teamData.origin.toggle=!teamData.origin.toggle", :class="{'active':teamData.origin.toggle}")
                    h2.h1(class="text-primary") 診所起源
                    i.h1.plus(class="bi bi-plus text-primary")
                    i.h1.dash(class="bi bi-dash text-primary")
                p.text(class="text-accentHeavy px-[10px] py-[5px] text-justify")
                    |在沐語，孩子能獲得專業復健，父母能找到理解與力量。<br>
                    |讓我們一起守護孩子的未來。
                .expand-content.origin(class="hidden")
                    p.text(class="text-accentHeavy px-[10px] py-[5px] pt-0 text-justify")
                        br
                        |早在還是醫院實習生時期，我曾遇到一位媽媽陪著發展遲緩的孩子做治療，總是安靜守候，卻在角落偷偷落淚。有一天，我聽見她的婆婆大聲責怪：「小孩會這樣都是妳害的！」那一刻，我才真正明白，這些家庭背後有多少委屈與壓力。<br>
                        br
                        |多年後，在社區裡，一位機車行老闆跟我說：「什麼時候能在這裡開一間兒童復健？我的孩子等了快一年都排不上！」那句話也深深觸動我。<br>
                        br
                        |當了父親後，我更明白孩子的黃金治療期不能等。於是，我和太太決定在社區裡打造一個有溫度的兒童復健診所。她以母親的角度規劃空間，從顏色到動線都親自思考，只為讓孩子不再害怕，讓父母能安心。<br>
                        br
                        |我們希望，孩子來這裡能安心接受治療，家長在這裡能感受到理解與支持，家庭能在這裡找到一些希望。
                p(class="text-[16px] font-bold text-primary p-[10px] md:text-right") 沐語兒童復健診所  創辦人  黃皓羣  呂芷語
    
    section.team
        .bg-primary(class="mb-[50px]")
            picture
                source(srcset="assets/images/about/wave_lg.svg", media="(min-width:768px)")
                img(src="assets/images/about/wave.svg", class="w-full block")
        .container(class="mx-auto pb-[50px]")
            uiHeadingSectionTitle(class="max-w-[600px] mx-auto mb-[20px]")
                template(v-slot:title) 沐語團隊
            a.btn-cate-expand(href="#", @click.prevent="teamData.founder.toggle=!teamData.founder.toggle", :class="{'active':teamData.founder.toggle}")
                img(src="assets/images/icon_deer.svg")
                span.h1 創辦人
                i.h1(class="bi bi-chevron-down")
            .expand-content.founder
                .card(v-for="item in teamData.founder.list")
                    figure
                        figcaption
                            img(:src="getImgUrl(`icon_${teamData.founder.icon}.svg`)")
                            span.title {{item.title}}<br>
                                b.h1 {{item.name}}
                        img(:src="getImgUrl(`about/founder_${item.id}.png`)", :alt="item.title+' '+item.name", :title="item.title+' '+item.name")
            
            a.btn-cate-expand(href="#", @click.prevent="teamData.rehab.toggle=!teamData.rehab.toggle", :class="{'active':teamData.rehab.toggle}")
                img(src="assets/images/icon_mountain.svg")
                span.h1 專科醫師
                i.h1(class="bi bi-chevron-down")
            .expand-content.rehab
                .card(v-for="item in teamData.rehab.list")
                    figure(class="mb-[10px]")
                        figcaption
                            img(:src="getImgUrl(`icon_${teamData.rehab.icon}.svg`)")
                            span.title {{item.title}}<br>
                                b.h1 {{item.name}}
                        img(:src="getImgUrl(`about/rehab_${item.id}.png`)", :alt="item.title+' '+item.name", :title="item.title+' '+item.name")
                    .exp(v-if="item.exp", :class="{'active':item.toggle}")
                        a.btn-expand(href="#", @click.prevent="item.toggle=!item.toggle", :class="{'active':item.toggle}")
                            span.title 學歷與經歷
                            i.h1.plus(class="bi bi-plus")
                            i.h1.dash(class="bi bi-dash")
                        ol
                            li.text(v-for="subItem in item.exp") {{subItem}}

            a.btn-cate-expand(href="#", @click.prevent="teamData.therapist.toggle=!teamData.therapist.toggle", :class="{'active':teamData.therapist.toggle}")
                img(src="assets/images/icon_lake.svg")
                span.h1 治療師
                i.h1(class="bi bi-chevron-down")
            .expand-content.therapist
                .card(v-for="item in teamData.therapist.list")
                    figure(class="mb-[10px]")
                        figcaption
                            img(:src="getImgUrl(`icon_${teamData.therapist.icon}.svg`)")
                            span.title {{item.title}}<br>
                                b.h1 {{item.name}}
                        img(:src="getImgUrl(`about/therapist_${item.id}.png`)", :alt="item.title+' '+item.name", :title="item.title+' '+item.name")
                    .exp(v-if="item.exp", :class="{'active':item.toggle}")
                        a.btn-expand(href="#", @click.prevent="item.toggle=!item.toggle", :class="{'active':item.toggle}")
                            span.title 學歷與經歷
                            i.h1.plus(class="bi bi-plus")
                            i.h1.dash(class="bi bi-dash")
                        ol
                            li.text(v-for="subItem in item.exp") {{subItem}}
            
            a.btn-cate-expand(href="#", @click.prevent="teamData.nursing.toggle=!teamData.nursing.toggle", :class="{'active':teamData.nursing.toggle}")
                img(src="assets/images/icon_dock.svg")
                span.h1 護理與行政團隊
                i.h1(class="bi bi-chevron-down")
            .expand-content.nursing
                .card(v-for="item in teamData.nursing.list")
                    figure(class="mb-[10px]")
                        figcaption
                            img(:src="getImgUrl(`icon_${teamData.nursing.icon}.svg`)")
                            span.title {{item.title}}<br>
                                b.h1 {{item.name}}
                        img(:src="getImgUrl(`about/nursing_${item.id}.png`)", :alt="item.title+' '+item.name", :title="item.title+' '+item.name")
                    .exp(v-if="item.exp", :class="{'active':item.toggle}")
                        a.btn-expand(href="#", @click.prevent="item.toggle=!item.toggle", :class="{'active':item.toggle}")
                            span.title 學歷與經歷
                            i.h1.plus(class="bi bi-plus")
                            i.h1.dash(class="bi bi-dash")
                        ol
                            li.text(v-for="subItem in item.exp") {{subItem}}
</template>
<style lang="scss" scoped>
.btn-expand {
    i.dash {
        @apply hidden;
    }

    &.active {
        i.plus {
            @apply hidden;
        }

        i.dash {
            @apply block;
        }
    }
}

section.team {
    .btn-cate-expand {
        @apply relative px-[10px] py-[20px] flex justify-start items-center text-white md:hidden;
        img {
            @apply w-[65px] mr-[15px];
        }

        i {
            @apply absolute right-[25px] top-1/2 -translate-y-[50%] transition-all duration-300;
        }

        &.active {
            i {
                @apply scale-y-[-1];
            }
        }
    }

    .expand-content {
        @apply px-[10px] flex flex-col gap-[20px] md:flex-row md:justify-center md:flex-wrap md:h-fit hidden md:flex md:mb-[20px];
    }

    .card {
        @apply rounded-[15px] bg-white px-[20px] pt-[10px] pb-[20px] max-w-[375px] md:h-fit;
        figure {
            figcaption {
                @apply flex justify-center text-primary mb-[10px];
                img {
                    @apply h-[68px] pr-[5px];
                }
            }

            > img {
                @apply w-full block;
            }
        }

        .exp {
            @apply  border-b-[1px] border-solid border-black;
        }

        .btn-expand {
            @apply flex justify-between items-center p-[5px] border-t-[1px] border-solid border-black;
        }

        ol {
            @apply pb-[20px] hidden;
            li {
                @apply list-disc ml-[30px];
            }
        }
    }
}
</style>
<script setup>
import { startLoading, getImgUrl } from '@/utils';

// vue use
// vue inject
const showLoading = inject('showLoading');

// vue vars
const teamData = reactive({
    'origin':{
        toggle:false
    },
    'founder':{
        icon:'lake',
        toggle:false,
        list:[
            {
                id:'huang',
                title:'創辦人',
                name:'黃皓羣'
            },
            {
                id:'lu',
                title:'創辦人',
                name:'呂芷語'
            },
        ]
    },
    'rehab':{
        icon:'mountain2',
        toggle:false,
        list:[
            {
                id:'lin',
                title:'復健科醫師',
                name:'林育如',
                toggle:false,
                exp:[
                    '長庚大學 醫學系畢業',
                    '林口長庚醫院 復健科總醫師',
                    '雙和醫院 復健科主治醫師',
                    '豐榮醫院 復健科主治醫師',
                    '台灣復健醫學 專科醫師',
                    '台灣兒童復健醫學會 會員',
                    '輔助醫學 專科醫師',
                    '台灣順勢醫學 專科醫師',
                    '中華民國能量醫學會 會員',
                    'Ai-Zen 認證師資'
                ]
            },
            {
                id:'yang',
                title:'復健科醫師',
                name:'楊振亞',
                toggle:false,
                exp:[
                    '通過美國醫師執照 ECM certified ',
                    '國立陽明大學醫 學士 ',
                    '美國哥倫比亞大學 公衛碩士/神經內科研究員',
                    '美國運動醫學會 EIM認證',
                    '台灣增生療法醫學會 會員',
                    '台灣復健醫學會 專科醫師',
                    '超全能診所 醫療副院長',
                    '台中榮總嘉義暨灣橋分院 復健科主治醫師',
                    '台北榮總復健醫學部 總醫師、住院醫師',
                    '美國醫師執照考試合格(USMLE) ',
                    '國立陽明交通大學 醫學系教育部部定師'
            ]
            },
            {
                id:'wang',
                title:'兒科專科醫師',
                name:'王健哲',
                toggle:false,
                exp:[
                    '高雄醫學大學 醫學系畢業',
                    '萬芳醫院 兒科主治醫師',
                    '耕莘醫院 兒科主治醫師'
                ]
            },
        ]
    },
    'therapist':{
        icon:'lake',
        toggle:false,
        list:[
            {
                id:'liu',
                title:'語言治療師',
                name:'劉懿萱',
                toggle:false,
                exp:[
                    '亞洲大學 聽力暨語言治療學系畢業',
                    '大千醫療體系竹南診所 語言治療組長、復健科副組長',
                    '豐榮醫院 復健科語言治療師',
                    '適康復健科所古亭院  兼職語言治療師'
                ]
            },
            {
                id:'kuang',
                title:'職能治療師',
                name:'鄺頌詩',
                toggle:false,
                exp:[
                    '德美診所 復健科職能治療師、早療職能治療師',
                    '臺北醫學大學 傷害防治研究所中風計劃 職能治療師',
                    'Tasteme 合作健康促進講師',
                    '城光行道會 合作健康促進講師',
                    '豐榮醫院 復健科職能治療師'
                ]
            },
            {
                id:'zhang',
                title:'職能治療師',
                name:'張祐榕',
                toggle:false,
                exp:[
                    '台北市松鴻診所 成人/小兒職能治療師',
                    '大新復健科診所  成人/小兒職能治療師',
                    '至傑護理之家 成人職能治療師 （報備支援）',
                    '穗安復健科診所  成人/小兒職能治療師',
                    '豐榮醫院 復健科職能治療師'
                ]
            },
            {
                id:'huang',
                title:'職能治療師',
                name:'黃微雯',
                toggle:false,
                exp:[
                    '義守大學 職能治療 學士',
                    '國考職能治療師證照',
                    '豐榮醫院 復健科治療長',
                    '曾於松園診所、怡和醫院、恩樺醫院服務，除傳統醫院職能治療外，也曾做過居家復能，協助長者及自閉症兒童等適應家中生活，並協助家裡環境改照。'
                ]
            },
            {
                id:'xu',
                title:'物理治療師',
                name:'許皓鈞',
                toggle:false,
                exp:[
                    '屏東美方門復健科診所 物理治療師',
                    '高雄上禾診所 物理治療師',
                    '內湖祐生復健科診所 物理治療師',
                    '河南省鄭州市神之手康復治療團隊 講師',
                    '豐榮醫院 復健科物理治療師',
                ]
            },
            {
                id:'zhangyan',
                title:'物理治療師',
                name:'張晏誠',
                toggle:false,
                exp:[
                    '台灣大學 物理治療學系學士',
                    '雙和醫院 物理治療師',
                    '豐榮醫院 復健科副治療長',
                ]
            },
        ]
    },
    'nursing':{
        icon:'dock',
        toggle:false,
        list:[
            {
                id:'du',
                title:'護理主任',
                name:'杜雅萍',
                toggle:false,
                exp:[
                    '專科（護理科）',
                    '大學（社工系）',
                    '護理師證照',
                    '長期呼吸照護病房及一般病房資歷18年（護理師3年/護理長10年/督導3年/主任2年）',
                    '北護合作計畫高齡個案管理師培訓、失智醫療進階培訓、乙級體重健康管理師、職業安全體格健檢護理師、長照level3認證、國際傷口照護師認證、甲類安寧護理師資格認證、感染管制護理師醫院執行業務負責窗口',
                ]
            },
            {
                id:'li',
                title:'特助',
                name:'李孟霖',
            },
            {
                id:'yang',
                title:'行政助理',
                name:'楊純綺',
            },
            {
                id:'ma',
                title:'行政助理',
                name:'馬悅甯',
            },
        ]
    },
})
// app vars
// function
definePageMeta({
    title:'About',
})

onMounted(()=>{
    console.log('about mounted');
    startLoading('.main', ()=>{
        showLoading.value = false;
    })
})

watch(()=>teamData, ()=>{
    nextTick(()=>{
        for (let n in teamData) {
            if (n=='origin'||window.innerWidth<768) {
                if (teamData[n].toggle)$(`.expand-content.${n}`).slideDown({start(){
                    $(this).css({display:'flex'})
                }}, 400)
                else $(`.expand-content.${n}`).slideUp(400);
            }
        }

        $('section.team .expand-content .exp').each((idx, item)=>{
            if ($(item).hasClass('active'))$(item).find('ol').slideDown(400);
            else $(item).find('ol').slideUp(400);
        })
    })
}, {
    deep:true
})
</script>