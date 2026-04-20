<template lang="pug">
.main(class="absolute left-0 top-0 w-full h-full flex justify-center items-center")
    .con
        h1(class="text-[36px] font-bold text-[#ccc] mb-[15px]") {{ error.statusCode }}
            span(class="ml-[10px] text-[#C75B7A] text-[30px]") Internal Server Error
        p(class="mb-[15px]") Oops, something went wrong<br>Try to refresh this page or feel free to contact us if the problem persists.
        a(href="#", @click.prevent="handleError", class="underline hover:no-underline") Go to Home
</template>
<script setup>
const handleError = () => clearError({ redirect: '/' });
const config = useRuntimeConfig();
const { rootPath } = config.public;
const props = defineProps({
    error:Object
})

// await useApi('./api/bugReport', {method:'post', body:{subject:`[${props.error.statusCode}] ${rootPath}`, url:rootPath+props.error.url, text:props.error.message}});

onMounted(()=>{
    console.log(props.error.message);
    console.log('error mounted');
})
</script>