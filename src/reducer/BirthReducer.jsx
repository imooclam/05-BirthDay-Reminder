import data from '../data';
import { REMOVE, CLEAR, RESET } from '../action';
const birthReducer = (state, action) => {
  if (action.type === CLEAR) {
    return {
      ...state,
      person: [],
    };
  }
  if (action.type === RESET) {
    return {
      ...state,
      person: data,
    };
  }
  if (action.type === REMOVE) {
    let newPeople = state.person.filter(
      people => people.id !== action.payload.id
    );
    return {
      ...state,
      person: newPeople,
    };
  }
};
export default birthReducer;
