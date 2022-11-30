<script setup>
import {useDataStore} from '../../stores/use-Data'

const dataStore = useDataStore()
const recentlyData = ref([])

watchEffect(async () => {
  recentlyData.value = await queryByCollection("activity")
  console.log(recentlyData.value)
  recentlyData.value.sort((a, b) => b.date - a.date)
},dataStore.data)

// watchEffect(async () => {
//     console.log(props.item.member[userID])
//     await add("activity", )
// }, props.item.member[userID].statu)

</script>

<template>
    <div class="w-64 h-[90%] bg-[#212121] rounded-xl hidden lg:flex flex-col items-center py-3 overflow-y-auto">
        <h1 class="text-xl text-white font-bold ">Recent Activity</h1>
        <div v-for="data in recentlyData" class="w-[90%] mt-4 flex items-start justify-center px-2 ">
            <div class="relative">
                <SharedAvatar size="h-10 w-10" />
                <span class="border absolute h-10 left-[18px] bg-gray-500"></span>
            </div>
            <div class="w-[80%] ml-2">
                <p class="text-sm text-white">
                    <span class="font-bold text-md"  >
                        {{data.name}}
                    </span> added 
                    <span class="text-indigo-500">
                        {{data.title}}
                    </span>
                     to
                     <span :class="data.statu">
                         {{data.statu}}
                     </span>
                </p>
                <span class="text-xs text-gray-200">
                    {{ $moment(data.date).fromNow() }}
                </span>
            </div> 
        </div>
    </div>
</template>


<style scoped>
.Todo{
    color:  #f06868;
}

.Inprogress{
    color:  #f8da5b;
}

.Done{
    color:  #7dd87d;
}

.Backlog{
    color:  #5293ee;
}


</style>