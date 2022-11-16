<script setup>
import {useDataStore} from '../../stores/use-Data'

const dataStore = useDataStore()

</script>

<template>
    <div class="header">
            <div class="header__user">
                <div class="w-1/2 h-full flex flex-col items-center justify-center">
                    <h1 class="text-2xl bold">Hello Emir !</h1>
                    <p>It’s good to see you again.</p>
                </div>
                <div>
                    <img src="../../assets/svg/welcome.svg" />
                </div>
            </div>
            <div class="header__right">
                <div class="w-full h-8 rounded-xl bg-[#212121] text-white font-medium flex justify-center items-center px-2 py-1 " >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.2861 3.3403C11.1564 0.210621 6.06262 0.210621 2.93294 3.3403C-0.19607 6.47067 -0.19607 11.5638 2.93294 14.6941C5.72 17.4805 10.0607 17.779 13.1884 15.6033C13.2542 15.9147 13.4048 16.2118 13.647 16.454L18.2048 21.0119C18.869 21.6747 19.9423 21.6747 20.6031 21.0119C21.2667 20.3483 21.2667 19.275 20.6031 18.6135L16.0453 14.0544C15.8045 13.8142 15.5066 13.6629 15.1952 13.5971C17.3724 10.4688 17.0738 6.12873 14.2861 3.3403ZM12.8471 13.2552C10.5105 15.5917 6.70782 15.5917 4.37192 13.2552C2.0367 10.9186 2.0367 7.11655 4.37192 4.77997C6.70782 2.44407 10.5105 2.44407 12.8471 4.77997C15.1837 7.11655 15.1837 10.9186 12.8471 13.2552Z" fill="white"/>
                    </svg>
                <input class="w-full bg-transparent px-2 outline-none"  type="text">
                </div>
                <div class="w-full h-32 flex items-center justify-around mt-4">
                    <div class="w-1/2 h-24 bg-[#212121] text-white font-medium  m-1 rounded-xl flex justify-center items-center " v-for="i in 2">
                        <span class="text-5xl font-extrabold "> 11 </span>
                        <span class=" w-3/5 text-center text-xl font-semibold "> Task Completed</span>
                    </div>
                </div>
            </div>
            <div class="header__avatar">
                <div class="h-10 flex justify-center items-center ">
                    <div class="h-10 w-10 bg-[#212121] text-white font-medium rounded-xl flex justify-center items-center mr-2">
                        <span class="text-3xl text-white material-symbols-outlined ">
                        notifications
                        </span>
                    </div>
                    <div class="w-10 h-10">
                        <img class="w-full h-full rounded-xl" src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=826&t=st=1668283720~exp=1668284320~hmac=584615e5790ead5e664a57a86b1db4b267ff358a1fcd9a293b074874ee25fd67" alt="">
                    </div>
                </div>
                <div class="w-full h-24 m-1 bg-[#212121] text-white font-medium rounded-xl flex flex-col items-center justify-center "   >
                    <span class=" w-3/5 text-center text-xl font-semibold ">Your Point</span>    
                    <span class=" text-3xl font-extrabold ">{{dataStore.getPoint}}</span>
                </div>
            </div>
    </div>
</template>


<style scoped>

.header{
    @apply w-full h-44 px-5 py-3 flex items-center justify-between 
}

.header__user{
    @apply w-[30%] h-full ml-5 flex bg-[#212121] text-white shadow-2xl font-medium rounded-3xl 
}

.header__right{
    @apply w-[30%] h-full flex flex-col  rounded-3xl ml-10 
}

.header__avatar{
    @apply w-[15%] h-full flex flex-col mr-5  rounded-3xl ml-10 justify-between
}

</style>