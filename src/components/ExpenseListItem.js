import React from 'react';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);

// not passing in mapStateToProps is fine, we'll still be connected and thus have
// access to dispatch()
export default ExpenseListItem;
