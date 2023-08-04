import { makeAutoObservable, makeObservable, observable } from "mobx"

class Store {
    buildings = {
        'building_1': {
            levels: ['b1_l1', 'b1_l2'],
            title: 'Building 1'
        },
        'building_2': {
            levels: ['b2_l1'],
            title: 'Building 2'
        },
    }

    offices = {
        'office_1': {
            isTaken: false,
            square_coords: [0, 0],
            border_map: [95, 1, 95, 46, 1, 46, 1, 300, 208, 300, 208, 1, 96, 1],
        },
        'office_2': {
            isTaken: false,
            square_coords: [1, 0],
            border_map: [95, 1, 95, 46, 1, 46, 1, 300, 208, 300, 208, 1, 96, 1]
        },
        'office_3': {
            isTaken: false,
            square_coords: [0, 1],
            border_map: [95, 1, 95, 46, 1, 46, 1, 300, 208, 300, 208, 1, 96, 1]
        }
    }

    levels = {
        'b1_l1': {
            offices: ['office_1', 'office_2', 'office_3'],
            img: {
                path: 'file:///C:/Users/03/Documents/website/tools/map-drawer/building-map.png',
                stroke: 10,
                dimensions: [1064, 649]
            },
            title: 1
        },
        'b1_l2': {
            offices: ['office_3'],
            img: {
                path: 'file:///C:/Users/03/Documents/website/tools/map-drawer/building-map.png',
                stroke: 10,
                dimensions: [1064, 649]
            },
            title: 2
        },
        'b2_l1': {
            offices: ['office_1', 'office_2', 'office_3'],
            img: {
                path: 'file:///C:/Users/03/Documents/website/tools/map-drawer/building-map.png',
                stroke: 10,
                dimensions: [1064, 649]
            },
            title: 1
        },
    }

    selectedOffice = 'office_1'


    setSelectedOffice(office_id) {
        this.selectedOffice = office_id
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export const store = new Store()