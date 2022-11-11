<script setup>

</script>

<template>
    <div class="h-screen flex items-center justify-center">
        <div class="w-28 h-[90%] bg-[#ffffff] rounded-xl  ">
            <div class="w-full h-20 text-2xl font-bold text-black mr-5 flex flex-col justify-center items-center mt-10 ">
                <h1>P.</h1>
            </div>
            <div class="w-full h-3/4 flex flex-col items-center text-black">
                <ul>
                    <li class="my-5 py-3 px-5 rounded-lg hover:bg-gray-200 hover:text-black">
                        <NuxtLink to="/" class="flex" >
                            <div class="flex justify-center items-center">
                                <span class="material-symbols-rounded">
                                    home
                                </span>
                            </div>
                        </NuxtLink>
                    </li>
                    <li class="my-5 py-3 px-5 rounded-lg hover:bg-gray-200 hover:text-black">
                        <NuxtLink  to="/about" class="flex" >
                            <div class="flex justify-center items-center">
                                <span class="material-symbols-rounded">
                                    about
                                </span>
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style  scoped>

</style>