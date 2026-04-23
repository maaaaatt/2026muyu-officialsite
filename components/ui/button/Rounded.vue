<template lang="pug">
a(href="#", class="title text-white bg-icon hover:bg-iconSecondary rounded-[999px] px-[20px] py-[5px] transition-all duration-300 inline-block")
    slot
</template>
<style lang="scss" scoped>
a.brown {
    @apply bg-accentHeavy text-[1.6rem] leading-[2.4rem] font-normal;
    &:hover {
        @apply bg-icon;
    }
}
</style>
<script setup>
// vue use
// vue inject
// vue vars
// app vars
// function
</script>
