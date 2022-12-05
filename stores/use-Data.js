import {defineStore} from 'pinia'


export const useDataStore = defineStore("data", {
    state: () => {
        return {
            user : [],
            data: [],
            currentUser : null,
            selected:"",
            isModalActive : false,
            notifications : [],
            activity : [],
        }
    },
    actions: {
        setActivity(activity){
            this.activity.unshift(activity)
        },
        updateProfilePhoto(photo){
            this.currentUser.image = photo  
            this.user.filter(user => user.userID === this.currentUser.userID)[0].image = photo    
        },
        setNotifications(notifications){
            this.notifications.push(notifications)
        },
        removeNotifications(id){
            this.notifications = this.notifications.filter(notification => notification.id !== id)
        },
        setSelectedData(data) {
            this.selected = data
        },
        setCurrentUser(user){
            this.currentUser = user
        },
        getData(statu,id){
            return this.data.filter(item => item.member[id]?.statu === statu)
        },
        StartDragData(event,item){
            event.dataTransfer.dropEffect = "move";
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("id", item.id);
        },
        async DropData(event,statu,userID){
            const itemID = event.dataTransfer.getData("id");
            const index = this.data.findIndex(item => item.id === parseInt(itemID))
            this.data[index].member[userID].statu = statu
            const activity = {
                name : this.data[index].member[userID].name,
                statu : statu,
                date : new Date().getTime(),
                title : this.data[index].title,
                image : this.currentUser.image,
            }
            this.activity.unshift(activity)
            await add("activity",activity)
            if(this.activity.length > 15){
                this.activity.pop()
                const id = this.activity[this.activity.length - 1].taskID
                await deleteByCollection("activity",id)
            }
        },
        setModalChange(){
            this.isModalActive = !this.isModalActive
        },
        setUserToData(id){
            this.data = this.data.map(item => {
                item.member = this.user.reduce((acc,cur) => {
                    if(!item.member[cur.userID]){
                    acc[cur.userID] = {
                        name : cur.name,
                        statu : "Backlog",
                    }}
                    return acc
                },{...item.member}
                )
                return item
            })
        },
        setUser(user){ //
            this.user.push(user)
        },
        addTask(data){ //
            this.data.push(data)
        },
        setFavorite(id){
            const index = this.data.findIndex(item => item.id === id)
            this.data[index].isFavorite = !this.data[index].isFavorite
        },
        clearData(){
            this.data = []
            this.user= []
            this.selected = ""
            this.activity = []
        },
        getPoint(id) {
            return this.data.filter(item => item.member[id]?.statu === "Done").reduce((a, b) => a + b.point, 0)
        },
        getMemberCount (id){
            const countMember = this.data.find(item => item.taskID === id).member
            const memberValues = Object.values(countMember)
            const member = memberValues.filter(item => item.statu !== "Backlog")
            return member
        },
        getCompletedTask (id) {
            return this.data.filter(item => item.member[id]?.statu === "Done").length
        },
        getNotCompletedTask (id) {
            return this.data.filter(item => item.member[id]?.statu !== "Done").length
        },
        getTaskByStatus(id,name) {
            return this.data.filter(item => item.member[id]?.statu === name).length
        },
    },
})