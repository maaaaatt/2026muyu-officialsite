<template lang="pug">
.site-nav(class="fixed left-0 top-[140px] w-full h-[calc(100%-140px)] bg-[rgba(153,134,117,.5)]")
	ul(class="flex flex-col")
		li(v-for="item in store.nav")
			a(:href="item.link") {{item.name}}
			ol(v-if="item.subnav")
				li(v-for="subItem in item.subnav")
					a(:href="subItem.link") {{subItem.name}}
</template>
<style lang="scss" scoped>
ul {
	@apply flex mx-[-10px];
	li {
		@apply mx-[10px]

	}
}
</style>
<script setup>
import { useSiteInfoStore } from '@/stores';

// vue use
// vue inject
const showNav = inject('showNav');

// vue vars
const store = useSiteInfoStore();

// app vars

// function
const initControls = ()=>{};
const buildListeners = ()=>{};

onMounted(()=>{
	initControls();
	buildListeners();
})
</script>
