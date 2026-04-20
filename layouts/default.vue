<template lang="pug">
.main(:class="route.name+' bg-[#ccffff] p-[20px] pt-0'")
    p(class="text-[12px] font-robot py-[5px]") default layout
    div(class="bg-white overflow-hidden")
        slot
</template>
<script setup>
const route = useRoute();
</script>