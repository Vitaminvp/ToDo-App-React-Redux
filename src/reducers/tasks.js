import { ACTIONS_TYPE, TASKS } from "../constants";
import { load } from "redux-localstorage-simple";

let MY_TASKS = load({ namespace: 'todo-list' });

if (!MY_TASKS || !MY_TASKS.tasks || !MY_TASKS.tasks.length) {
  MY_TASKS = {
    tasks: [...TASKS],
  }
}

const tasks = (state = MY_TASKS.tasks, { id, text, isCompleted, type }) => {
  switch (type) {
    case ACTIONS_TYPE.ADD_TASK:
      return [
        ...state,
        {
          id,
          text,
          isCompleted
        }
      ];

    case ACTIONS_TYPE.REMOVE_TASK:
      return [...state].filter(task => task.id !== id);

    case ACTIONS_TYPE.COMPLETE_TASK:
      return [...state].map(task => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });

    default:
      return state;
  }
};

export default tasks;
