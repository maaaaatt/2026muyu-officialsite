<template lang="pug">
.m-collapse
    a.btn-expand(href="#", @click.prevent="toggle=!toggle", :class="{'active':toggle}")
        slot(name="btn")
    .expand-body
        slot(name="body")
    .expand-content(class="hidden", ref="content")
        slot(name="content")
</template>
<style lang="scss">
.m-collapse {
    .btn-expand {
        .bi-dash {
            @apply hidden;
        }
    
        .bi-chevron-down {
            @apply -translate-y-[50%] transition-all duration-300;
        }
    
        &.active {
            .bi-plus {
                @apply hidden;
            }
    
            .bi-dash {
                @apply block;
            }
    
            .bi-chevron-down {
                @apply scale-y-[-1];
            }
        }
    }
}
</style>
<script setup>
// vue use
// vue inject
// vue vars
const content = useTemplateRef('content');
const toggle = ref(false);
const props = defineProps({
    flex:false
})
// app vars
// function
watch(toggle, ()=>{
    if (toggle.value) {
        $(content.value).slideDown({start(){
            if(props.flex)$(this).css({display:'flex'});
        }},400);
    } else {
        $(content.value).slideUp(400);
    }
})
</script>
