<script setup>

const props = defineProps(["sidebarItem"])
const emits = defineEmits(["active"])

const clickHandler = () => {
    emits("active",props.sidebarItem.id)
    props.sidebarItem.handler ? props.sidebarItem.handler() : null
}

</script>

<template>
    <div class="my-5 py-3 px-5 rounded-lg hover:bg-[#5293ee] hover:text-white"
    :class="{ 'bg-[#5293ee]' : props.sidebarItem.isActive }">
        <NuxtLink 
        :to="props.sidebarItem.link" 
        class="flex items-center justify-center"
        @click="clickHandler">
            <div class="flex justify-center items-center">
                <span class="material-symbols-outlined">
                    {{props.sidebarItem.icon}}
                </span>
            </div>
        </NuxtLink>
    </div>
</template>


<style scoped>

</style>-