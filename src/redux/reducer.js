import {act} from "@testing-library/react";

const initialState = {
    statuses: [
        {
            id: '60d8a8650f3453003ca52240',
            title: 'todo'
        }, {
            id: "60d8a87a0f3453003ca52241",
            title: 'progress'
        }, {
            id: "60d8a8910f3453003ca52242",
            title: 'review'
        }, {
            id: "60d8a89d0f3453003ca52243",
            title: 'done'
        }
    ],
    tasks: [
        {name: 'task 1', id: 112, description: 'qweqwe', status: 'todo'},
        {name: 'task 2', id: 113, description: 'qweqwe', status: 'done'},
        {name: 'task 3', id: 114, description: 'qweqwe', status: 'review'},
        {name: 'task 4', id: 115, description: 'qweqwe', status: 'todo'},
        {name: 'task 5', id: 116, description: 'qweqwe', status: 'progress'},
        {name: 'task 6', id: 117, description: 'qweqwe', status: 'progress'},
        {name: 'task 7', id: 118, description: 'qweqwe', status: 'todo'}
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_CARD':
            const newTask = [...state.tasks, action.payload]
            return {...state, tasks: newTask};

        case 'CHANGE_STATUS' :
            const statusArray = state.statuses.map(el => el.title);
            const newStatus = statusArray[statusArray.indexOf(action.payload.currStatus) + action.payload.direction];
            const newTask2 = state.tasks.map(el => el.id === action.payload.id ? {...el, status: newStatus} : el)
            return {...state, tasks: newTask2}
        case 'EDIT_CARD':
            const newTask3 = state.tasks.map(el => el.id === action.payload.id ? action.payload : el)
            return {...state, tasks: newTask3};
        default:
            return state;
    }
}

export default reducer;