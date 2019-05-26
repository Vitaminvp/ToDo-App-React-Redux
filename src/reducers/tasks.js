import { ACTIONS_TYPE, TASKS } from "../constants";

const tasks = (state = TASKS, { id, text, isCompleted, type }) => {
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
