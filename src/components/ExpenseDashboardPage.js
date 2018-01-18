import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

// notice how ExpenseList did not require any info passed down from ExpenseDashboardPage
// it got its info via connect in ExpenseList.js
const ExpenseDashboardPage = () => (
  <div>
   <ExpenseListFilters />
   <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
