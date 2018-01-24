import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('correctly render expenses summary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={12440} />);
  expect(wrapper).toMatchSnapshot();
});

test('correctly render expenses summary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={12440342342} />);
  expect(wrapper).toMatchSnapshot();
});
