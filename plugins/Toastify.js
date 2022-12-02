export default defineNuxtPlugin(nuxtApp => {

	const toast = (message = "Default Message", options = {}) => {
			const {background, position = 'top-right', icon, duration = 10000 ,barActive=true, barBackground="gray", color = "white"} = options;
			const toast = {
				id: new Date().getTime(),
				description: message,
				show: true,
				duration,
				icon,
				barActive,
				class: {
					barBackground,
					position,
					background,
					color,
				},
				type : (description , options={}) => {
					const { position, icon , duration ,background ,barBackground,barActive} = options;
					toast.description = description;
					toast.icon= icon;
					toast.duration = duration;
					toast.barActive = barActive
					toast.class.position = position;
					toast.class.background = background;
					toast.class.barBackground = barBackground
				},
				success: (description = 'Success Notification !', options = {}) => {
					const { position = 'top-right', icon = "check_circle", duration = 2000 ,
					background = '#4caf50', barBackground="#c9f0cb" , barActive=true} = options;
					toast.type(description, { position, icon, duration, background , barBackground,barActive });
					return toast;
				},
				error: (description = 'Error Notification !', options = {}) => {
					const { position = 'top-right', icon = "priority_high", duration = 2000 ,
					background = '#f44336',barBackground="#faa19b", barActive=true} = options;
					toast.type(description, { position, icon, duration, background,barBackground,barActive });
					return toast;
				},
				warning: (description = 'Warning Notification !', options = {}) => {
					const { position = 'top-right', icon = "warning", duration = 2000 ,
					background = '#ff9800' , barBackground="#f7cc8d",barActive=true} = options;
					toast.type(description, { position, icon, duration, background,barBackground,barActive });
					return toast;
				},
				info: (description = 'Info Notification !', options = {}) => {
					const { position = 'top-right', icon = "info", duration = 2000 ,
					background = '#2196f3' ,barBackground="#a3d6ff", barActive=true} = options;
					toast.type(description, { position, icon, duration, background, barBackground, barActive });
					return toast;
				},
			};
			return toast;
		}

	nuxtApp.provide('toast', toast)
    nuxtApp.vueApp.provide('toast', toast)

})