import {defineStore} from 'pinia'

export const useDataStore = defineStore("data", {
    state: () => {
        return {
            data: [
                {id: 1, title: "Title 1", description: "Description 1"},
                {id: 2, title: "Title 2", description: "Description 2"},
                {id: 3, title: "Title 3", description: "Description 3"},
                {id: 4, title: "Title 4", description: "Description 4"},
                {id: 5, title: "Title 5", description: "Description 5"},
                {id: 6, title: "Title 6", description: "Description 6"},
                {id: 7, title: "Title 7", description: "Description 7"},
                {id: 8, title: "Title 8", description: "Description 8"},
                {id: 9, title: "Title 9", description: "Description 9"},
            ],
            selected: []
        }
    },
    actions: {
        setSelectedData(data) {
            this.selected.push(data)
        }
    }
})