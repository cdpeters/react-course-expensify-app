import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

/* ExpenseList - takes in the expenses array and renders a new expense list item
for each expense in the array */

/* by using the spread operator here, the props passed in to ExpenseListItem look like:
rops.description, props.amount, etc. As opposed to setting a property: expense = {expense}
which would have made the props look like: props.expense.description, props.expense.amount, etc.
This would have changed how we destructured within ExpenseListItem */

// named export for testing only - need to test the unconnected version of this component
export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No Expenses To Show</p>
      ) : (
        props.expenses.map((expense, index) => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      )
    }
  </div>
);

// mapStateToProps defines the things we want to get off of the store and defines
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

/* the HOC: the argument syntax for ExpenseList here is defined by the react-redux
library. ExpenseList represents the component we want the connected version of. */
export default connect(mapStateToProps)(ExpenseList);
