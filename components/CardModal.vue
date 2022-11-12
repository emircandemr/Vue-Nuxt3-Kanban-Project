<script setup>

</script>

<template>
    <div class="modal">
        <div class="modal__layer"></div>
        <div class="modal__content relative">
            <div class="w-1/2 h-full rounded-xl">
                <img class="w-full h-full rounded-xl" src="https://scontent.fszf2-1.fna.fbcdn.net/v/t39.30808-6/305204204_475940821213391_7309799711632212258_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gqOV7P8wxlUAX_g5Mg2&_nc_ht=scontent.fszf2-1.fna&oh=00_AfCfkr_yyVhnQxU6ryziDrs1OLwAYKzbZj-mXAGXitgssQ&oe=63752353" alt="">
            </div>
            <div class="w-1/2 h-full bg-yellow-50">
                <div class="w-full h-16 mt-8 bg-blue-100">
                    
                </div>
            </div>
            <div class="absolute top-1 right-1 ">
                <span class="material-symbols-outlined">
                    close
                </span>
            </div>
        </div>

    </div>
</template>

<style scoped>

.modal {

    @apply w-full h-full fixed top-0 z-50 left-0;

    /* position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center; */
}

.modal__layer {

    @apply w-full h-full bg-black bg-opacity-50;

    /* position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); */
}

.modal__content{
    @apply w-1/2  h-1/2 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  bg-white rounded-xl shadow-xl flex justify-center items-center;
}

</style>