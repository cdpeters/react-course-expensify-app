import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('setup REMOVE_EXPENSE action object', () => {
  const id = '123abc';
  const action = removeExpense({ id });

  // for arrays or objects use toEqual.
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id
  });
});

test('setup EDIT_EXPENSE action object', () => {
  const id = '123abc';
  const updates = {
    description: 'Lobbityboobap'
  };

  const action = editExpense(id, updates);

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });
});

test('setup ADD_EXPENSE action object', () => {
  const expenseData = {
    description: 'rent',
    amount: 30000,
    createdAt: 1000,
    note: 'This was my rent'
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)  // this is a uuid string
    }
  });
});

test('setup ADD_EXPENSE action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
