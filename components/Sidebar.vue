<script setup>

</script>

<template>
    <div class="w-60 h-screen bg-[#121212]">
        <div class="w-full h-20 text-2xl font-bold text-white mr-5 flex flex-col justify-center items-center mt-10 ">
            <img src="https://user-images.githubusercontent.com/72731296/200189155-471a2374-a590-4451-b691-31505eae67d4.png" alt="">
        </div>
        <div class="w-full h-3/4  flex flex-col items-center text-white">
            <ul class=" w-11/12 py-1 rounded-lg hover:bg-gray-900" v-for="i in 5">
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
        <div class="w-full h-24 flex justify-center items-center ">
            <div class=" mr-5 ">
                <img class="w-14 h-14 rounded-full" src="https://flxt.tmsimg.com/assets/587180_v9_bb.jpg" alt="">
            </div>
            <div class="avatar__name">
                <div class="avatar__name--name">
                    <span class="text-white font-bold">
                        John Doe
                    </span>
                </div>
                </div>
        </div>  
    </div>
</template>


<style lang="scss" scoped>

</style>