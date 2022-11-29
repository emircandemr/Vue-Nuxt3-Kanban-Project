export default defineNuxtPlugin( () => {
    addRouteMiddleware('auth', ()=> {
        const {$auth} = useNuxtApp();

        console.log("middleware",$auth?.currentUser)

        if (!$auth?.currentUser) {
            signOut();
            return navigateTo('/login')
        }

    }) 

})