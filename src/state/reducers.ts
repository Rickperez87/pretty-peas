import { action } from "./actions";

const initialState = {
  articles: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === "ADD_ARTICLE") {
    state.articles.push(action.payload);
  }

  return state;
}
export default rootReducer;
