import { BASE_LANG, ACTIONS_TYPE } from "../constants";

const lang = (state = BASE_LANG, { type, lang }) => {
  switch (type) {
    case ACTIONS_TYPE.CHANGE_LANG:
      return lang;
    default:
      return state;
  }
};

export default lang;
