<template lang="pug">
header.site-header(class="fixed left-0 top-0 w-full bg-primary z-[999]")
	.shortcut
		.container(class="pt-[40px] lg:pt-[12px] flex flex justify-center items-end lg:justify-start mx-auto")
			ul(class="flex justify-center items-end gap-[8px]")
				li
					uiButtonTab 掛號
				li
					uiButtonTab 最新消息
			ul(class="flex justify-center items-end gap-[8px] ml-[8px]")
				//- li(class="pb-[3px]")
					uiButtonTabIcon.active
						img(src="assets/images/icon_darkmode.svg", class="w-[16.5px]")
				//- li(class="pb-[3px]")
					uiButtonTabIcon
						img(src="assets/images/icon_fontsize.svg", class="w-[16.5px]")
				li(class="pb-[3px]")
					a(href="#", class="w-[60px] h-[30px] bg-white rounded-[999px] flex justify-start items-center px-[10px]")
						img(src="assets/images/icon_search.svg", class="w-[18px]")
	//- .accessibility(class="bg-white rounded-t-[6px] hidden")
		.container(class="pl-[30px] pr-[10px] mx-auto flex justify-between items-center mx-auto")
			ul(class="flex justify-start items-center gap-[10px] py-[11px] hidden")
				li
					span(class="text text-primary") 文字大小
				li
					uiButtonOutline.active 大
				li
					uiButtonOutline 中
				li
					uiButtonOutline 小
			ul.darkmode(class="flex justify-start items-center py-[11px]")
				li(class="mr-[30px]")
					uiButtonOutline 深色模式
				li
					uiButtonOutline 重設所有無障礙設定
			a(href="#")
				img(src="assets/images/icon_x.svg", class="w-[32px]")
	
	.header(class="bg-secondary")
		.container(class="flex justify-between items-center h-[64px] lg:h-[80px] mx-auto")
			h1.site-logo(class="w-[216px] lg:w-[240px] ml-[20px] lg:mx-0")
				a(href="#")
					img(src="assets/images/logo.svg", class="w-full block")
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
		@apply relative w-[64px] h-[64px] block lg:hidden;
		
		.inner {
			@apply absolute left-1/2 top-1/2 w-[18px] h-[12px] -ml-[9px] -mt-[6px];
		}
	
		.ui {
			@apply absolute right-0 w-[18px] h-[2px] bg-white transition-all rounded-[999px] bg-primary;
		}
	
		.top {
			@apply top-0 origin-[100%_0%];
		}
	
		.mid {
			@apply top-[calc(50%-1px)];
		}
	
		.bot {
			@apply bottom-0 origin-[100%_100%];
		}
	
		&.active {
			.top {
				@apply top-[-5px] rotate-[-45deg] w-[27px];
			}
	
			.mid {
				@apply opacity-0;
			}
	
			.bot {
				@apply rotate-[45deg] w-[27px] bottom-[-4px];
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
