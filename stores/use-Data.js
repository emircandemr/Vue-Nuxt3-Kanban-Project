import {defineStore} from 'pinia'

export const useDataStore = defineStore("data", {
    state: () => {
        return {
            data: [
                {
                    id: 1, 
                    title: "Title 1", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
                    point : 100000,
                    isStatu : "Backlog"
                },
                {
                    id: 2, 
                    title: "Title 2", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", 
                    point : 100,
                    isStatu : "Inprogress"
                },
                {
                    id: 3, 
                    title: "Title 3", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", 
                    point : 100,
                    isStatu : "Done"
                },
                {
                    id: 4, 
                    title: "Title 4", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", 
                    point : 100,
                    isStatu : "Todo"
                },
                {
                    id: 5, 
                    title: "Title 5", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
                    point : 100000,
                    isStatu : "Backlog"
                },
                {
                    id: 6, 
                    title: "Title 6", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", 
                    point : 100,
                    isStatu : "Inprogress"
                },
                {
                    id: 7, 
                    title: "Title 7", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", 
                    point : 100,
                    isStatu : "Done"
                },
                {
                    id: 8, 
                    title: "Title 8", 
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", 
                    point : 100,
                    isStatu : "Todo"
                },
                // {id: 5, title: "Title 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", point : 100},
                // {id: 6, title: "Title 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", point : 100},
                // {id: 7, title: "Title 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", point : 100},
                // {id: 8, title: "Title 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", point : 100},
                // {id: 9, title: "Title 9", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", point : 100},
                // {id: 10, title: "Title 10", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", point : 100},
                // {id: 11, title: "Title 11", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", point : 100},
                // {id: 12, title: "Title 12", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", point : 100},

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
            return this.data.filter(item => item.isStatu === statu)
        },
        StartDragData(event,item){
            event.dataTransfer.dropEffect = "move";
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("id", item.id);
        },
        DropData(event,statu){
            const itemID = event.dataTransfer.getData("id");
            const index = this.data.findIndex(item => item.id === parseInt(itemID))
            this.data[index].isStatu = statu
        },
        setModalChange(){
            this.isModalActive = !this.isModalActive
        },
        setUser(user){
            this.user = user
        }
    },
    getters: {
        getPoint() {
            return this.data.filter(item => item.isStatu === "Todo").reduce((a, b) => a + b.point, 0)
        },
    }
})