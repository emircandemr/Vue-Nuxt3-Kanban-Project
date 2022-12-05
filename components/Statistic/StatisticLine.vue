<script setup>
import { Doughnut,Line,Bubble,PolarArea } from 'vue-chartjs'
import {  ref } from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
  DoughnutController,
  BarController,
  LineController,
  BubbleController,
  PolarAreaController,
  RadialLinearScale
} from "chart.js";
import { useDataStore } from '../../stores/use-Data'

const dataStore = useDataStore()

const firebaseUser = useFirebaseUser()

const userID = firebaseUser.value?.uid

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  ArcElement,
);

const labels = ["Backlog","Todo","Inprogress","Done"]

const chartData = ref({
    labels :  labels.map((label) => label),
    datasets: [ 
        { 
            data: labels.map((label) => {
                return dataStore.getTaskByStatus(userID, label)
            }),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB'],
            label :"Task",
            borderColor : "white",
            borderWidth : 1,
            hoverBackgroundColor : "red",
            hoverBorderColor : "red",
            tension: 0.5,
            fill: false,           
        }
    ]
})

const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        myScale: {
          position: "left",
        },
      },
    plugins: {
        legend: {
            display: false,
            position: 'bottom',

        },
        
    },
    backgroundColor: "white",

})

</script>
<template>
    <Line
    :chart-data="chartData"
    :options="chartOptions"
    style="width: 60%; height: 60%;"
    />
</template>


<style scoped>

</style>