export default defineNuxtRouteMiddleware( (to,from) => {
    const {$auth} = useNuxtApp();
    const config = useRuntimeConfig()

    if ($auth?.currentUser.uid !== config.ADMIN_UUID) {
        return abortNavigation()
    }
})
// export default defineNuxtPlugin( () => {
//     addRouteMiddleware('admin', ()=> {
//         const {$auth} = useNuxtApp();
//         const config = useRuntimeConfig()

//         if ($auth?.currentUser.uid !== config.ADMIN_UUID) {
//             return abortNavigation()

//         }

//     }) 

// })
