<script setup>

</script>

<template>
    <div class="h-screen flex items-center justify-center">
        <div class="w-28 h-[90%] bg-[#212121] shadow-2xl rounded-xl  ">
            <div class="w-full h-20 text-2xl font-bold text-white mr-5 flex flex-col justify-center items-center mt-10 ">
                <h1 class="text-5xl text-[#5293ee]">P.</h1>
            </div>
            <div class="w-full h-3/4 flex flex-col items-center text-white">
                <ul>
                    <li class="my-5 py-3 px-5 rounded-lg hover:bg-[#5293ee] hover:text-white">
                        <NuxtLink to="/" class="flex items-center justify-center" >
                            <div class="flex justify-center items-center">
                                <span class="material-symbols-outlined">
                                    home
                                </span>
                            </div>
                        </NuxtLink>
                    </li>
                    <li class="my-5 py-3 px-5 rounded-lg hover:bg-[#5293ee] hover:text-black">
                        <NuxtLink  to="/tasks" class="flex" >
                            <div class="flex justify-center items-center">
                                <span class="material-symbols-outlined">
                                splitscreen
                                </span>
                            </div>
                        </NuxtLink>
                    </li>
                    <li class="my-5 py-3 px-5 rounded-lg hover:bg-[#5293ee] hover:text-black">
                        <NuxtLink  to="/login" class="flex" >
                            <div class="flex justify-center items-center">
                                <span class="material-symbols-outlined">
                                logout
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