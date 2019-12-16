import shortid from 'shortid';
import * as plannerTypes from './actionTypes';

export const enterBudget = amount => {
  return {
    type: plannerTypes.ADD_BUDGET,
    payload: {
      amount: Number(amount),
    },
  };
};

export const addExpense = (name, expenseAmount) => {
  return {
    type: plannerTypes.ADD_EXPENSE,
    payload: {
      expense: {
        id: shortid.generate(),
        expenseAmount,
        name,
      },
    },
  };
};

export const removeExpanse = id => {
  return {
    type: plannerTypes.REMOVE_EXPENSE,
    payload: {
      id,
    },
  };
};
