<script setup>
import { useDataStore } from '../../stores/use-Data'

const dataStore = useDataStore()

const firebaseUser = useFirebaseUser()

const userID = firebaseUser.value?.uid

const tabData = ref([
  {
    name : "Doughnut",
    isActive : true,
    id : 1
  },
  {
    name : "Line",
    isActive : false,
    id : 2
  },
  {
    name : "PolarArea",
    isActive : false,
    id : 3
  },
  {
    name : "Bar",
    isActive : false,
    id : 4
  }
])

const tabHandler = (id) => {
  tabData.value.forEach((item) => {
    if(item.id == id) return item.isActive = true
    item.isActive = false
  })
}



</script>

<template>
    <div class="w-[90%] lg:w-[50%] hidden lg:flex rounded-2xl px-5  flex-col bg-[#121212] items-center text-white">
            <h1 class=" text-2xl text-start">Statistic</h1>
            <div class="w-full mt-3 mb-3 text-start">
              <SharedButton 
              v-for="data in tabData"
              :text = "data.name"
              class="px-1 mr-2 py-1 cursor-pointer hover:text-[#5293ee]"
              :class="data.isActive ? 'text-[#5293ee]' : ''"
              :handler = "() => tabHandler(data.id)">
              </SharedButton>
            </div>
            <StatisticDoughnut v-if="tabData[0].isActive" />
            <StatisticLine v-if="tabData[1].isActive" />
            <StatisticRadar v-if="tabData[2].isActive" />
            <StatisticBar v-if="tabData[3].isActive" />

    </div>
</template>


<style scoped>

</style>