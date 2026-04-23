<template lang="pug">
.site-nav(class="fixed lg:absolute left-0 lg:left-auto lg:right-0 top-[140px] lg:top-auto lg:bottom-0 w-full lg:w-auto h-[calc(100%-140px)] lg:h-auto bg-[rgba(153,134,117,.5)] lg:bg-transparent flex justify-end hidden lg:flex")
	ul(class="flex flex-col lg:flex-row bg-primary lg:bg-transparent h-full lg:h-auto w-[320px] lg:w-auto p-[30px] lg:p-0 gap-y-[15px] lg:gap-y-0 lg:gap-x-[10px]")
		li
			a.h2(href="/")
				span 首頁
		li(v-for="item in store.nav", :class="{'active':selectedItem==item.name}")
			a.h2(href="#", @click.prevent="setSelectedItem(item.name)")
				span {{item.name}}
				i(class="bi bi-chevron-down")
			ol(v-if="item.subnav", class="hidden")
				li(v-for="subItem in item.subnav")
					a.title(:href="subItem.link")
						img(src="assets/images/icon_disc.svg", class="w-[12px]")
						|{{subItem.name}}
</template>
<style lang="scss" scoped>
ul {
	> li {
		@apply relative mx-[10px];
		> a {
			@apply relative text-white lg:text-primary flex justify-between items-center px-[20px] lg:px-[30px] py-[10px] lg:py-[15px];
			&:before {
				@apply absolute left-0 top-0 w-full h-full block content-[""] bg-primary rounded-t-[20px] z-[1] hidden lg:block opacity-0 transition-all duration-300;
			}
			span {
				@apply relative z-[3];
			}
			
			i {
				@apply transition-all duration-300 lg:hidden ;
			}
		}

		&.active, &:hover {
			> a {
				@apply lg:text-secondary;
				&:before {
					@apply lg:opacity-100;
				}
			}
		}

		&.active {
			> a {
				i {
					@apply scale-y-[-1];
				}
			}
		}
	}

	ol {
		@apply pl-[20px] lg:min-w-full lg:px-0 lg:absolute lg:left-0 lg:top-full lg:bg-primary lg:rounded-b-[20px];
		li {
			@apply mx-0;
			a {
				@apply text-white flex justify-start items-start lg:px-[30px] py-[10px] lg:py-[15px] lg:text-secondary lg:whitespace-nowrap;
				img {
					@apply mr-[10px] mt-[8px] lg:hidden;
				}
			}
		}
	}
}
</style>
<script setup>
import { useSiteInfoStore } from '@/stores';
import { gsap } from 'gsap';

// vue use
// vue inject
const showNav = inject('showNav');

// vue vars
const store = useSiteInfoStore();
const selectedItem = ref('');

// app vars

// function
const initControls = ()=>{};
const buildListeners = ()=>{};
const setSelectedItem = (itemName)=>{
	if (selectedItem.value==itemName)selectedItem.value = '';
	else selectedItem.value = itemName;
}

onMounted(()=>{
	initControls();
	buildListeners();
})

watch(selectedItem, ()=>{
	nextTick(()=>{
		$('.site-nav ul > li').each((idx,item)=>{
			if ($(item).hasClass('active'))$(item).find('ol').slideDown(400);
			else $(item).find('ol').slideUp(400);
		})
	})
})

watch(showNav, ()=>{
	console.log(`showNav: ${showNav.value}`);
	if (showNav.value) {
		gsap.fromTo('.site-nav',
			{alpha:0, display:'flex'},
			{alpha:1, ease:'none', duration:.4}
		)
		gsap.fromTo('.site-nav ul',
			{x:'100%'},
			{x:0, ease:'cubic.out', duration:.4, delay:.2}
		)
	} else {
		gsap.to('.site-nav',
			{alpha:0, ease:'none', duration:.4, delay:.2, onComplete(){
				$('.site-nav, .site-nav ul').attr('style', '');
			}}
		)
		gsap.to('.site-nav ul',
			{x:'100%', ease:'cubic.out', duration:.4}
		)
	}
})
</script>
