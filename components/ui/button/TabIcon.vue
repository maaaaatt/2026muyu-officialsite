<template lang="pug">
a(href="#", class="w-[30px] h-[30px] flex justify-center items-center bg-white rounded-[5px]")
    slot
</template>
<style lang="scss" scoped>
a {
    @apply relative;
    &:after {
        @apply absolute left-0 bottom-0 w-full h-0 content-[""] block bg-white;
    }

    &:hover, &.active {
        @apply rounded-b-[0];
        &:after {
            @apply absolute left-0 -bottom-[3px] w-full h-[3px] content-[""] block;
        }
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
