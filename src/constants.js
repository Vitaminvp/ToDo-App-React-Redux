export const TASKS = [
    {
        id: 1,
        text: "Learn ReactJS",
        isCompleted: true
    },
    {
        id: 2,
        text: "Learn Redux",
        isCompleted: false
    },
    {
        id: 3,
        text: "Learn React Router",
        isCompleted: false
    }
];

export const FILTERS = [
    {
        text: 'All',
        id: 'all',
    },
    {
        text: 'Active',
        id: 'active',
    },
    {
        text: 'Completed',
        id: 'completed'
    }
];

export const BASE_FILTER = 'all';

export const ACTIONS_TYPE = {
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    COMPLETE_TASK: 'COMPLETE_TASK',
    CHANGE_FILTER: 'CHANGE_FILTER'
};