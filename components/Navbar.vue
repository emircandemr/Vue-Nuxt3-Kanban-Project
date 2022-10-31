<script setup>

</script>

<template>
    <div class="navbar">
        <div class="navbar__logo">
            APP
        </div>
        <div>
            <ul class="navbar__links">
                <li class="navbar__link">
                    <a href="#">Home</a>
                </li>
                <li class="navbar__link">
                    <a href="#">About</a>
                </li>
                <li class="navbar__link">
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>  
    </div>
</template>


<style scoped>

.navbar{
    @apply w-3/4 mt-5 h-12 bg-slate-100 rounded-2xl shadow-2xl flex items-center px-5
}
.navbar__logo {
    @apply text-2xl font-bold text-slate-900 mr-5
}
.navbar__links {
    @apply flex justify-end w-full 
}

</style>