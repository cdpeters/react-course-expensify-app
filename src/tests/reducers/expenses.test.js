import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('NOT remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('add expense', () => {
  const expense = {
    id: '100',
    description: 'gas bill',
    amount: 1200,
    note: '',
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ ...expenses, expense ]);
});

test('edit expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount: 5555
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(action.updates.amount);
});

test('NOT edit expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount: 5555
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
