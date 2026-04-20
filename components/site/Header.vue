<template lang="pug">
header.site-header
	.container
		h1.site-logo
			a(href="#") logo
		a.menu(href="#", @click.prevent="toggle", :class="{active:showNav}")
			.inner
				.ui.top
				.ui.mid
				.ui.bot
		SiteNav
</template>
<style lang="scss">
.site-header {
	a.menu {
		@apply absolute right-0 top-0 w-[56px] h-[56px] bg-black block float-right m-0 z-[999] lg:hidden;
		
		.inner {
			@apply absolute left-1/2 top-1/2 mt-[-9px] ml-[-14px] w-[28px] h-[18px];
		}
	
		.ui {
			@apply absolute right-0 w-[28px] h-[3px] bg-white transition-all rounded-[1.5px];
		}
	
		.top {
			@apply top-0 origin-[100%_0%];
		}
	
		.mid {
			@apply top-[calc(50%-2px)];
		}
	
		.bot {
			@apply bottom-0 origin-[100%_100%];
		}
	
		&.active {
			.top {
				@apply top-[-5px] rotate-[-45deg] w-[39px];
			}
	
			.mid {
				@apply opacity-0;
			}
	
			.bot {
				@apply rotate-[45deg] w-[39px] bottom-[-6px];
			}
		}
	}
}
</style>
<script setup>

// vue use
const { $emit, $on } = useNuxtApp();

// vue inject
const showNav = inject('showNav');

// vue vars
// app vars

// function
const initControls = ()=>{};
const buildListeners = ()=>{
	$on('indexEvent', msg=>{
		console.log(msg);
	})
};
const toggle = ()=>{
	showNav.value = !showNav.value;
}

onMounted(()=>{	
	initControls();
	buildListeners();
})
</script>
