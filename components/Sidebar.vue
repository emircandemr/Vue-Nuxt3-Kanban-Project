<script setup>

</script>

<template>
    <div class="w-40 h-screen flex items-center justify-center">
        <div class="w-28 h-[90%] bg-[#0C0B0B] rounded-xl shadow-2xl ">
            <div class="w-full h-20 text-2xl font-bold text-white mr-5 flex flex-col justify-center items-center mt-10 ">
                <h1>P.</h1>
            </div>
            <div class="w-full h-3/4  flex flex-col items-center text-white">
                <ul class="py-1 px-5 rounded-lg hover:bg-gray-900" v-for="i in 5">
                    <li class="my-5">
                        <NuxtLink  to="/" class="flex" >
                            <div class="flex justify-center items-center">
                                <span class="material-symbols-rounded">
                                    home
                                </span>
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            

        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>