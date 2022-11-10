<script setup>

</script>

<template>
    <div class="w-40 h-screen flex items-center justify-center ml-5">
        <div class="w-28 h-[90%] bg-[#0C0B0B] rounded-xl  ">
            <div class="w-full h-20 text-2xl font-bold text-white mr-5 flex flex-col justify-center items-center mt-10 ">
                <h1>P.</h1>
            </div>
            <div class="w-full h-3/4  flex flex-col items-center text-white">
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