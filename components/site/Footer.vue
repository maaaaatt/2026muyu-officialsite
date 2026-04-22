<template lang="pug">
footer.site-footer(class="bg-primary")
    .bg
        picture
            source(srcset="assets/images/footer_bg_lg.svg", media="(min-width:996px)")
            img(src="assets/images/footer_bg.svg", class="w-full block mb-[60px] lg:mb-0")
    .container(class="overflow-hidden mx-auto")
        .row(class="flex flex-col gap-y-[20px] lg:flex-row lg:justify-between lg:items-center")
            .col
                img(src="assets/images/logo_footer.svg", class="w-[160px] mx-auto")
            .col
                p.text(class="text-white text-center")
                    |<img src="assets/images/icon_tel.svg" class="inline-block mb-[3px] mr-[5px]">02-8666-9000<br>
                    |<img src="assets/images/icon_addr.svg" class="inline-block mb-[3px] mr-[5px]"> 新北市新店區安康路二段 127 號 1 樓<br>
                    |醫療機構代碼  3531054639
            .col(class="flex justify-center items-center gap-[30px]")
                a(href="#")
                    img(src="assets/images/icon_line.svg")
                a(href="#")
                    img(src="assets/images/icon_ig.svg")
        .row
            p.caption(class="text-white text-center my-[20px]") © 沐語兒童復健診所  All Rights Reserved.  <br class="lg:hidden">本院內容未經同意不得任意轉載<br>Designed by FancyDesign
</template>
<style lang="scss" scoped>
.col {
    @apply lg:flex-[0_0_33.33%];
}
</style>
<script setup>
// vue use
// vue inject
// vue vars
// app vars
// function
</script>
