import React from 'react';
import { NavLink } from 'react-router-dom';

/* if linking outside the app (externally), its fine to use a regular anchor tag
since you aren't able to take advantage of client side routing if your going
externally. If you're linking within your app (internally), use Link to take
advantage of client side routing. Link and NavLink allow us to 'hi-jack' the browser
to avoid its default behavior of querying the server */

/* NavLink is better suited for navigation (multiple links side by side), it has
extra props to take advantage of when styling. Link will be used almost everywhere
though. */
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
  </header>
);

export default Header;
