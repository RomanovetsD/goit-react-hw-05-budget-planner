import { combineReducers } from 'redux';
import * as types from './actionTypes';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case types.ADD_BUDGET:
      return action.payload.amount;
    default:
      return state;
  }
};

const expensesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_EXPENSE:
      return [...state, payload.expense];
    case types.REMOVE_EXPENSE:
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
};

export default combineReducers({
  expenses: expensesReducer,
  budget: budgetReducer,
});
