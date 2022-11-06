<script setup>

</script>

<template>
    <div class="w-60 h-screen bg-[#121212]">
        <div class="w-full h-20 text-2xl font-bold text-white mr-5 flex flex-col justify-center items-center mt-10 ">
            <img src="https://user-images.githubusercontent.com/72731296/200189155-471a2374-a590-4451-b691-31505eae67d4.png" alt="">
        </div>
        <div class="w-full h-3/4  flex flex-col items-center text-white">
            <ul class=" w-11/12 py-1 rounded-lg hover:bg-black" v-for="i in 8">
                <li class="my-2">
                    <NuxtLink  to="/" class="flex" >
                        <div class="w-12 flex justify-center items-center">
                            <span class="material-symbols-rounded">
                                home
                            </span>
                        </div>
                        <div>
                            Home
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </div>  
    </div>
</template>


<style lang="scss" scoped>

</style>