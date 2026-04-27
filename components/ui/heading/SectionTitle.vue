<template lang="pug">
.section-title(class="rounded-[999px] bg-primary text-white text-center p-[20px] flex flex-col justify-center items-center")
    h2.h1
        slot(name="title")
    p(class="text-[16px] text-justify md:text-center px-[20px] pt-[10px]", v-if="$slots.description")
        slot(name="description")
</template>
<style lang="scss" scoped>
</style>
<script setup>
// vue use
// vue inject
// vue vars
// app vars
// function
</script>
