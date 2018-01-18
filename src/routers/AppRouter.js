import React from 'react';
/* BrowserRouter creates the new router (done once), Route is used for each page.
react-router-dom is the web version. Native version: react-router-native */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
/* BrowserRouter requires at most 1 child (either none or 1, not more)

Switch will evaluate each Route component and if they match, it will not move
on to the other routes. The NotFoundPage component will always match therefore
it will catch all of the cases where someone visits a route that doesn't exist */
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>

  </BrowserRouter>
);

export default AppRouter;
