import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    //this.props.dispatch(addExpense(expense));
    this.props.addExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

/* AddExpensePage was converted to a class based component in order to avoid the
inline onSubmit function (which would need to get redefined on each render)
that was originally used in the stateless functional version.

  mapDispatchToProps was used in order to create a situation where addExpense() is
not directly referenced inside of the AddExpensePage component. This way when testing
we can use a spy in place of the onSubmit() call above (before, it was
props.dispatch(addExpense(expense)) which referenced a second function which is an
import). In general, mapDispatchToProps is a way to abstract away the dispatch call
that is common with connect */

const mapDispatchToProps = (dispatch) => ({
  // set property to the action generator name
  addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
