import { ACTIONS_TYPE } from '../../constants';

export const addTask = (id, text, isCompleted) => ({
    type: ACTIONS_TYPE.ADD_TASK,
    id,
    text,
    isCompleted
});

export const addComment = (id, parentId, text ) => ({
    type: ACTIONS_TYPE.ADD_COMMENT,
    id,
    parentId,
    text
});

export const removeTask = id => ({
    type: ACTIONS_TYPE.REMOVE_TASK,
    id
});

export const completeTask = id => ({
    type: ACTIONS_TYPE.COMPLETE_TASK,
    id
});

export const changeFilter = activeFilter => ({
    type: ACTIONS_TYPE.CHANGE_FILTER,
    activeFilter,
});