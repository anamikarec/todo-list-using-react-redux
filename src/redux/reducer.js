import { actionConstants } from "./actions";

const initState = {
  todos: [
    {
      id: 1,
      status: true,
      title: "BUY BREAD"
    }
  ]
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionConstants.ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case actionConstants.REMOVE_TODO_ITEM: {
      // TODO
      return state;
    }
    case actionConstants.TOGGLE_TODO_STATUS: {
      // TODO
      return state;
    }
    default:
      return state;
  }
}

export default reducer;

// 1. true
// 2. false
// 3. error
// 4. others
