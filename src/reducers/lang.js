import { BASE_LANG, ACTIONS_TYPE } from "../constants";

import { load } from "redux-localstorage-simple";

let MY_LANG = load({ namespace: 'todo-list' });


if (!MY_LANG || !MY_LANG.lang) {
  MY_LANG.lang = BASE_LANG;
}

const lang = (state = MY_LANG.lang, { type, lang }) => {
  switch (type) {
    case ACTIONS_TYPE.CHANGE_LANG:
      return lang;
    default:
      return state;
  }
};

export default lang;
