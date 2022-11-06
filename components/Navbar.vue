<script setup>

</script>

<template>
    <div class="navbar">
        <div class="navbar__input">
            <div class="w-10 flex items-center justify-center ml-2">
                <span class="material-symbols-outlined">
                    search
                </span>
            </div>
            <input type="text">
        </div>  
    </div>
</template>


<style scoped>

.navbar{
    @apply w-full mt-5 h-12 flex items-center 
}

.navbar__input{
    @apply w-1/3 h-10 bg-transparent border border-gray-400 rounded-xl flex items-center ml-7
}

.navbar__input input {
    @apply w-full h-full bg-transparent  outline-none text-white
}

</style>