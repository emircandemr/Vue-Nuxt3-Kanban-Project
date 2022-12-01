import {defineStore} from 'pinia'


export const useDataStore = defineStore("data", {
    state: () => {
        return {
            user : [],
            data: [],
            currentUser : null,
            selected:"",
            isModalActive : false,
        }
    },
    actions: {
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
        DropData(event,statu,userID){
            const itemID = event.dataTransfer.getData("id");
            console.log("itemID",itemID)
            const index = this.data.findIndex(item => item.id === parseInt(itemID))
            this.data[index].member[userID].statu = statu
        },
        setModalChange(){
            this.isModalActive = !this.isModalActive
        },
        setUserToData(id){
            this.data = this.data.map(item => {
                if(item.member[id]) return item
                item.member = this.user.reduce((acc,cur) => {
                    console.log(cur)
                    acc[cur.userID] = {
                        name : cur.name,
                        statu : "Backlog"
                    }
                    return acc
                },{})
                return item
            })
        },
        setUser(user){
            this.user.push(user)
        },
        addTask(data){
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