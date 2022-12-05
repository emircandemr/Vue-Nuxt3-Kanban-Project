
export default defineNuxtRouteMiddleware( (to,from) => {
    const {$auth} = useNuxtApp();
    if (!$auth?.currentUser) {
        signOut();
        return navigateTo('/login')
    }
    
})

// export default defineNuxtPlugin( () => {
//     addRouteMiddleware('auth', ()=> {
//         const {$auth} = useNuxtApp();
//         if (!$auth?.currentUser) {
//             signOut();
//             return navigateTo('/login')
//         }

//     }) 

// })
