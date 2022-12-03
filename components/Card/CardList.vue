<script setup>

defineProps({
    task : {
        type : Object,
        required : true,
    },
})

</script>

<template>
    <div class="h-20 mt-5 py-3 bg-[#212121] rounded-2xl flex items-center">
        <CardItem :task="task" ></CardItem>
    </div>
</template>


<style scoped>

</style>