export default defineNuxtPlugin( () => {
    addRouteMiddleware('admin', ()=> {
        const {$auth} = useNuxtApp();

        if ($auth?.currentUser.uid !== "s4kGjqIq7PgBCzRvFIsSrXgSbsD3") {
            return navigateTo('/login')
        }

    }) 

})