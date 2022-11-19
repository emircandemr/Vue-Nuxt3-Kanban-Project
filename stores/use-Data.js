import {defineStore} from 'pinia'

export const useDataStore = defineStore("data", {
    state: () => {
        return {
            data: [
                {
                    id: 1,
                    title: "First Item",
                    description: "This is the first item",
                    category : "High",
                    statu: "Backlog",
                    date: "2021-01-01",
                    image : "https://picsum.photos/200/300",
                    point : 100,
                    memberCount : 3,
                    member : [ "John", "Jane", "Jack", "Jill", "Jenny" ],
                    isFavorite : false
                },
                {
                    id: 2,
                    title: "Second Item",
                    description: "This is the second item",
                    category : "Medium",
                    statu: "Backlog",
                    date: "2021-01-02",
                    image : "https://picsum.photos/200/300",
                    point : 200,
                    memberCount : 2,
                    member : [ "John", "Jane" ],
                    isFavorite : false

                },
                {
                    id: 3,
                    title: "Third Item",
                    description: "This is the third item",
                    category : "Low",
                    statu: "Backlog",
                    date: "2021-01-03",
                    image : "https://picsum.photos/200/300",
                    point : 300,
                    memberCount : 1,
                    member : [ "John" ],
                    isFavorite : true
                },
            ],
            selected:"",
            isModalActive : false,
            user : {}
        }
    },
    actions: {
        setSelectedData(data) {
            this.selected = data
        },
        getData(statu){
            return this.data.filter(item => item.statu === statu)
        },
        StartDragData(event,item){
            event.dataTransfer.dropEffect = "move";
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("id", item.id);
        },
        DropData(event,statu){
            const itemID = event.dataTransfer.getData("id");
            const index = this.data.findIndex(item => item.id === parseInt(itemID))
            this.data[index].statu = statu
        },
        setModalChange(){
            this.isModalActive = !this.isModalActive
        },
        setUser(user){
            this.user = user
        },
        addTask(data){
            this.data.push(data)
        },
        setFavorite(id){
            const index = this.data.findIndex(item => item.id === id)
            this.data[index].isFavorite = !this.data[index].isFavorite
        }
    },
    getters: {
        getPoint() {
            return this.data.filter(item => item.statu === "Done").reduce((a, b) => a + b.point, 0)
        },
    }
})