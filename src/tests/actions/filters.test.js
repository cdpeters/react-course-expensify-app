import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
  setTextFilter
} from '../../actions/filters';


test('generate SET_START_DATE action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('generate SET_END_DATE action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('generate SORT_BY_AMOUNT action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('generate SORT_BY_DATE action object', () => {
  const action = sortByDate();
  expect(action).toEqual({ type: 'SORT_BY_DATE' });
});

test('setup ADD_EXPENSE action object', () => {
  const text = 'rent';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('setup ADD_EXPENSE action object with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});
