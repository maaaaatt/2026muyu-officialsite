<template lang="pug">
.main
    section.top(class="bg-[url(assets/images/about/banner_bg.jpg)] bg-center")
        .container
            img(src="assets/images/about/team.png", class="w-full block")

    section.origin(class="bg-primary")
        .container(class="px-[10px] py-[30px]")
            .box(class="rounded-[20px] bg-white p-[20px] max-w-[600px] mx-auto")
                a(href="#", class="p-[10px] flex justify-between")
                    h2.h1(class="text-primary") 診所起源
                    i.h1(class="bi bi-plus text-primary")
                    i.h1(class="bi bi-dash text-primary hidden")
                p.text(class="text-accentHeavy px-[10px] py-[5px] text-justify")
                    |在沐語，孩子能獲得專業復健，父母能找到理解與力量。<br>
                    |讓我們一起守護孩子的未來。
                .expendo(class="hidden")
                    p.text(class="text-accentHeavy px-[10px] py-[5px] pt-0 text-justify")
                        br
                        |早在還是醫院實習生時期，我曾遇到一位媽媽陪著發展遲緩的孩子做治療，總是安靜守候，卻在角落偷偷落淚。有一天，我聽見她的婆婆大聲責怪：「小孩會這樣都是妳害的！」那一刻，我才真正明白，這些家庭背後有多少委屈與壓力。<br>
                        br
                        |多年後，在社區裡，一位機車行老闆跟我說：「什麼時候能在這裡開一間兒童復健？我的孩子等了快一年都排不上！」那句話也深深觸動我。<br>
                        br
                        |當了父親後，我更明白孩子的黃金治療期不能等。於是，我和太太決定在社區裡打造一個有溫度的兒童復健診所。她以母親的角度規劃空間，從顏色到動線都親自思考，只為讓孩子不再害怕，讓父母能安心。<br>
                        br
                        |我們希望，孩子來這裡能安心接受治療，家長在這裡能感受到理解與支持，家庭能在這裡找到一些希望。
                p(class="text-[16px] font-bold text-primary p-[10px] lg:text-right") 沐語兒童復健診所  創辦人  黃皓羣  呂芷語
    section.team(class="bg-primary")
        img(src="assets/images/about/wave_top.svg", class="w-full block")
        .container
            h2.h1(class="rounded-[999px] bg-primary text-white text-center h-[75px] flex justify-center items-center") 沐語團隊
            a.btn-expand(href="#")
                img(src="assets/images/icon_deer.svg")
                span.h1 創辦人
                i.h1(class="bi bi-chevron-down")
            a.btn-expand(href="#")
                img(src="assets/images/icon_mountain.svg")
                span.h1 專科醫師
                i.h1(class="bi bi-chevron-down")
            a.btn-expand(href="#")
                img(src="assets/images/icon_lake.svg")
                span.h1 治療師
                i.h1(class="bi bi-chevron-down")
            a.btn-expand(href="#")
                img(src="assets/images/icon_dock.svg")
                span.h1 護理與行政團隊
                i.h1(class="bi bi-chevron-down")
</template>
<style lang="scss" scoped>
section.team {
    .btn-expand {
        @apply relative px-[10px] py-[20px] flex justify-start items-center text-white;
        img {
            @apply h-[68px] mr-[15px];
        }

        i {
            @apply absolute right-[25px] top-1/2 -translate-y-[50%];
        }
    }
}
</style>
<script setup>
import { startLoading } from '@/utils';

// vue use
// vue inject
const showLoading = inject('showLoading');

// vue vars
// app vars
// function
definePageMeta({
    title:'About',
    layout:'about',
})

onMounted(()=>{
    console.log('about mounted');
    startLoading('.main', ()=>{
        showLoading.value = false;
    })
})
</script>