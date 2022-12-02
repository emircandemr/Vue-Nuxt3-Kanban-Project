<script setup>

const props = defineProps(["notifications"]);
const remove = ref(null);

const clickHandler = () => {
	props.notifications.forEach((element) => {
		if (element.id === parseInt(remove.value)) {
			element.show = false;
		}
	});
};
</script>

<template>
	<div class="notifications" :class="props.notifications[0]?.class.position">
		<template v-for="notification in props.notifications" :key="notification">
			<Notification
				v-model:id="remove"
				v-if="notification.show"
				:notification="notification"
				@click="clickHandler"
			>
			</Notification>
		</template>
	</div>
</template>

<style scoped lang="scss">
.notifications {
	position: fixed;
	margin: 8px;
	z-index: 9999;
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
