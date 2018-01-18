import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';


test('filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[1] ]);
});

/* remember startDate and endDate are moment objects! But createdAt is an actual
timestamp number. */

// TEST CASES
test('filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectExpenses(expenses,filters);
  expect(result).toEqual([ expenses[2], expenses[0] ]);
});

test('filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };
  const result = selectExpenses(expenses,filters);
  expect(result).toEqual([ expenses[0], expenses[1] ]);
});

test('sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses,filters);
  expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

test('sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses,filters);
  expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ]);
});
