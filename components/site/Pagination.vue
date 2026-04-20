<template lang="pug">
.pagination(class="w-full", v-if="totalPages>1")
	ul(class="flex justify-end")
		li(class="mx-[5px]", v-if="props.currentPage!=1")
			NuxtLink(:to="{query:prevPage}", class="text-[14px] text-[#9f9f9f]")
				span(class="w-[30px] h-[30px] block text-center leading-[30px] rounded-full bg-white") <
		li(class="mx-[5px]", v-for="n in totalPages")
			NuxtLink(:to="{query:getPageNum(n)}", class="text-[14px] text-[#9f9f9f]")
				span(class="w-[30px] h-[30px] block text-center leading-[30px] rounded-full bg-white data-active:bg-[#e9e9e9] data-active:text-[#484848]", :data-active="props.currentPage==n") {{n}}
		li(class="mx-[5px]", v-if="props.currentPage!=totalPages")
			NuxtLink(:to="{query:nextPage}", class="text-[14px] text-[#9f9f9f]")
				span(class="w-[30px] h-[30px] block text-center leading-[30px] rounded-full bg-white") >
</template>
<style lang="scss" scoped>
</style>
<script setup>
import { useSiteInfoStore } from '@/stores';

// vue use
const route = useRoute();
const router = useRouter();
// vue inject
// vue vars
const props = defineProps({
	count:0,
	pageSize:9,
	currentPage:1
})
const totalPages = computed(()=>{
	return Math.ceil(props.count/props.pageSize);
})
const prevPage = computed(()=>{
	const o = Object.assign({}, route.query);
	o.page = parseInt(props.currentPage)-1;
	return o;
})
const nextPage = computed(()=>{
	const o = Object.assign({}, route.query);
	o.page = parseInt(props.currentPage)+1;
	return o;
})
// app vars

// function
const initControls = ()=>{};
const buildListeners = ()=>{};
const getPageNum = (n)=>{
	const o = Object.assign({}, route.query);
	o.page = n;
	return o;
}

onMounted(()=>{
	initControls();
	buildListeners();
})
</script>
