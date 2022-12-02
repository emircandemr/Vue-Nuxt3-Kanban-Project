<script setup>
import { onMounted, ref } from "vue";
import { useDataStore } from '~~/stores/use-Data';

const barWidth = ref(100);
const isClose = ref(true);
const dataStore = useDataStore()


const props = defineProps(["notification"]);
const emit = defineEmits(["update:id"]);

const position = props.notification.class.position;
const backgroundColor = props.notification.class.background;
const barBackground = props.notification.class.barBackground;
const color = props.notification.class.color;

const closeHandler = () => {
	emit("update:id", props.notification.id);
};

const startTimer = (time) => {
		const timer = setInterval(() => {
				barWidth.value -= 1;
				if (barWidth.value === 0) {
						clearInterval(timer);
				}
		}, time / 100);
  }

onMounted(() => {
	setTimeout(() => {
		isClose.value = false;
		dataStore.removeNotifications(props.notification.id)
	}, props.notification.duration);
	startTimer(props.notification.duration)
});

</script>

<template>
	<template v-if="isClose">
		<div class="notification--message" :class="position" :style="{backgroundColor : backgroundColor}" >
			<div class="notification--message__text" :style="{color : color }">
				<span class="material-symbols-outlined">
					{{ props.notification.icon }}
				</span>
				{{ props.notification.description }}	
			</div>
			<div class="notification--message__close" @click="closeHandler">
				<span class="material-symbols-outlined"> close </span>
			</div>
			<div v-if="props.notification.barActive" class="notification--message__bar" :style="{ width: `${barWidth}%` , backgroundColor : barBackground}" ></div>
		</div>
	</template>
</template>

<style scoped lang="scss">

.notification--message {
	display: flex;
	position: relative;
	align-items: center;
	justify-content: space-between;
	border-radius: 5px;
	margin: 10px;
	padding: 12px 5px;
	min-width: 150px;
	max-width: 300px;
	width: auto;
	z-index: 99;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	&__text {
		font-size: 12px;
		font-weight: 500;
		display: flex;
		align-items: center;
		margin-right: 8px;
		span {
			margin: 0px 8px;
			font-size: 18px;
		}
	}
	&__close {
		cursor: pointer;
		display: flex;
		align-items: center;
		span {
			font-size: 14px;
			margin-left: 5px;
			color: rgb(59, 46, 46);
			font-weight: bolder;
		}
	}
	&__bar{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        border-radius: 0px 0px 5px 5px;
    }
}

.top-right {
	top: 0;
	right: 0;
	animation: top-right 0.3s;
}

.top-center {
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	/* animation: top-center 0.3s ; */

}

.top-left {
	top: 0;
	left: 0;
	animation: top-left 0.3s;

}

.bottom-right {
	bottom: 0;
	right: 0;
	animation: bottom-right 0.3s;

}

.bottom-center {
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	/* animation: bottom-center 0.3s; */

}

.bottom-left {
	bottom: 0;
	left: 0;
	animation: bottom-left 0.3s;
}

@keyframes top-right {
	0% {
		transform: translateX(100%);
	}

	100% {
		transform: translateX(0%);
	}
}

@keyframes top-left {
	0% {
		transform: translateX(-100%);
	}

	100% {
		transform: translateX(-0%);
	}
}

@keyframes bottom-right {
	100% {
		transform: translateX(0%);
	}

	0% {
		transform: translateX(100%);
	}
}

@keyframes bottom-left {
	100% {
		transform: translateX(0%);
	}

	0% {
		transform: translateX(-100%);
	}
}

/* @keyframes bottom-center{
	0%{
			transform: translateY(100%);
	}
	100%{
			transform: translateY(0%);
	}
}  */
/* @keyframes top-center{
	100%{
			transform: translateY(0%);
	}
	0%{
			transform: translateY(100%);
	}
}  */
</style>
