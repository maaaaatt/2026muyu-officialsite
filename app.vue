<template lang="pug">
SiteLoading
SiteHeader
NuxtLayout
	NuxtPage
SiteFooter
</template>
<script setup>
import { useSiteInfoStore } from '@/stores';
import swal from 'sweetalert2';

// vue use
const store = useSiteInfoStore();
const route = useRoute();
const config = useRuntimeConfig();

// vue vars
const showNav = ref(false);
const showLoading = ref(true);
const { rootPath } = config.public;

// vue inject
provide('showNav', showNav);
provide('showLoading', showLoading);
provide('swal', (msg)=>{
	swal.fire({
		text: msg,
		confirmButtonText: '確定',
		customClass:{
			confirmButton: 'sw2-confirm-button',
			htmlContainer: 'sw2-html-container',
			popup: 'sw2-popup',
		
		}
	})
});

/* 
useHead, useSeoMeta區別參考
https://clairechang.tw/2023/07/26/nuxt3/nuxt-v3-meta-tags/
*/
useHead({
	titleTemplate:`${route.meta.title} - ${store.meta.title}`,
})

useSeoMeta({
	ogTitle      : `${route.meta.title} - ${store.meta.title}`,
	description  : store.meta.description,
	ogDescription: store.meta.description,
	ogUrl        : rootPath,
	ogImage      : rootPath+'/share.jpg',
})

useSchemaOrg([
	defineWebSite({
		'name': store.meta.title,
		'url' : rootPath
	}),
	{
		'@type': 'Organization',
		name: store.meta.title,
		url: rootPath,
		contactPoint: [
			{
				'@type': 'ContactPoint',
				telephone: store.meta.tel,
				email: store.meta.email,
				contactType: 'customer service',
				availableLanguage: ['zh-TW', 'en']
			}
		],
		address: {
			'@type': 'PostalAddress',
			streetAddress: '6F., No. 145, Sec. 2, Minsheng E. Rd., Zhongshan Dist.',
			addressLocality: 'Taipei',
			addressCountry: 'TW'
		}
	},
])

onMounted(()=>{
	$(window).bind('resize', onResizeHandler);
	onResizeHandler();

	function onResizeHandler(){
		const root = document.documentElement;
		root.style.setProperty('--vh', `${window.innerHeight}px`);
	}
})

</script>
