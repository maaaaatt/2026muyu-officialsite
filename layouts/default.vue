<template lang="pug">
.wrapper(:class="route.name", class="pt-[140px] lg:pt-[128px]")
    slot
</template>
<script setup>
const route = useRoute();
</script>