<script setup>
import {useDataStore} from '../stores/use-Data'

const dataStore = useDataStore()

const closeHandler = () => {
    dataStore.setModalChange()
}

</script>

<template>
    <div class="modal">
        <div class="modal__layer"></div>
        <div class="modal__content relative">
            <div class="w-1/2 h-full rounded-xl">
                <img class="w-full h-full rounded-xl" src="https://scontent.fszf2-1.fna.fbcdn.net/v/t39.30808-6/305204204_475940821213391_7309799711632212258_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gqOV7P8wxlUAX_g5Mg2&_nc_ht=scontent.fszf2-1.fna&oh=00_AfCfkr_yyVhnQxU6ryziDrs1OLwAYKzbZj-mXAGXitgssQ&oe=63752353" alt="">
            </div>
            <div class="w-1/2 h-full px-5 border-l border-dashed border-gray-300">
                <div class="w-full h-12 p-2 flex justify-between items-center mt-8">
                    <span class="w-12  py-1 px-1 rounded-md bg-red-200 text-center text-xs text-red-800 ">
                        High
                    </span>
                    <span class="min-w-12 px-1 py-1 rounded-md  bg-green-100 text-center text-xs text-green-900 ">
                        +{{dataStore.selected.point}}
                    </span>
                    <span class="w-20 px-1 py-1 rounded-md  bg-[#edf0f7] text-center text-xs text-slate-800 ">
                    Nov 11, 2022
                    </span>
                </div>
                <div class="w-full h-[50%] p-2">
                    <h1 class="text-md font-bold text-slate-600">
                        {{dataStore.selected.title}}
                    </h1>
                    <p class="text-sm text-slate-900">
                        {{dataStore.selected.description}}
                    </p>
                </div>
                <div class="w-full min-h-16 mt-2 p-2 flex justify-between items-center ">
                    <div class= "flex items-center justify-center flex-wrap">
                        <span v-for="i in 5" class="mx-1 border border-black rounded-full" >
                            <img class="w-8 h-8 rounded-full" src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=826&t=st=1668283720~exp=1668284320~hmac=584615e5790ead5e664a57a86b1db4b267ff358a1fcd9a293b074874ee25fd67" alt="">
                        </span>
                    </div>
                    <span class="w-20 h-1/2 flex justify-center items-center px-1 py-1 rounded-md  bg-[#edf0f7] text-center text-xs text-slate-800 ">
                        <span class="material-symbols-outlined text-sm">
                        check_circle
                        </span>
                        <span class="mx-1">
                            0/5
                        </span>
                    </span>
                </div>
            </div>
            <div class="absolute top-2 right-3 " @click="closeHandler">
                <span class="material-symbols-outlined hover:text-red-900 cursor-pointer"  >
                    close
                </span>
            </div>
        </div>

    </div>
</template>

<style scoped>

.modal {
    @apply w-full h-full fixed top-0 z-50 left-0;
}

.modal__layer {
    @apply w-full h-full bg-black bg-opacity-20  ;
    backdrop-filter: blur(1px);
}

.modal__content{
    @apply w-2/5  h-2/5 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  bg-white rounded-xl shadow-xl flex justify-center items-center;
}

</style>