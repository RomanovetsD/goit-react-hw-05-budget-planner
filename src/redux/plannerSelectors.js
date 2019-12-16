import { createSelector } from 'reselect';

const getBudget = state => state.budget;

const getExpences = state => state.expenses;

const getTottalExpenses = createSelector(
  [getExpences],
  expenses => expenses.reduce((acc, expense) => acc + expense.expenseAmount, 0),
);

const getBalance = createSelector(
  [getTottalExpenses, getBudget],
  (tottalExpenses, budget) => budget - tottalExpenses,
);

export default { getExpences, getBudget, getTottalExpenses, getBalance };
