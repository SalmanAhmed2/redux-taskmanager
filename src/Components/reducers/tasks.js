import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
} from "../actions/actions.js";
const initialState = {
  data: [],
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        data: [...state.data, action.message],
      };
    case DELETE_TODO:
      const deleteItem = state.data.filter((tasks) => tasks.id !== action.id);
      return {
        ...state,
        data: deleteItem,
      };
    case EDIT_TODO:
      // const newValue = state.data.find((tasks) => tasks.id === action.id);
      return {
        ...state,
        data: [...state.data],
      };
    case UPDATE_TODO:
      const updateValue = state.data.filter(
        (tasks) => tasks.id !== action.message.id
      );
      return {
        ...state,
        data: [...updateValue, action.message],
      };
    default:
      return state;
  }
};
export default tasks;