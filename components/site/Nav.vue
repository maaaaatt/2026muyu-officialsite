<template lang="pug">
.site-nav
	ul
		li(v-for="item in store.nav")
			a(:href="item.link", class="text-[#abcdef]") {{item.name}}
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
