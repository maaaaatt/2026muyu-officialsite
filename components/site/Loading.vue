<template lang="pug">
.loading(class="fixed left-0 top-0 w-full h-full bg-[rgba(0,0,0,.85)] z-[999] invisible opacity-0 transition-[all] duration-[400ms] data-active:opacity-100 data-active:visible", :data-active="showLoading")
	.pic(class="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] bg-[url(@/assets/images/loading.png)] overflow-hidden animate-loading w-[24px] h-[24px]")
</template>
<style lang="scss" scoped>
</style>
<script setup>
// vue use
// vue inject
const showLoading = inject('showLoading');

// vue vars
// app vars
// function
</script>
