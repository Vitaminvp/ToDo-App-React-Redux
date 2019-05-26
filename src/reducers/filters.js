import { ACTIONS_TYPE, BASE_FILTER } from "../constants";

const filter = (state = BASE_FILTER, { type, activeFilter }) => {
  switch (type) {
    case ACTIONS_TYPE.CHANGE_FILTER:
      return activeFilter;
    default:
      return state;
  }
};

export default filter;
