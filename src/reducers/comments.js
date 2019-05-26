import { ACTIONS_TYPE } from "../constants";


const comments = (state = [], { id, text, parentId, type }) => {
    switch (type) {
        case ACTIONS_TYPE.ADD_TASK:
            const task = state.tasks ? state.tasks.filter(task => {
                if(task[id] === parentId) {
                    task.comments.push({id, text});
                    return true;
                }
                return false;
            }).push({ id, text }): null;
            console.log("task", task);
            return [
                ...state,
                
            ];

        default:
            return state;
    }
};

export default comments;
