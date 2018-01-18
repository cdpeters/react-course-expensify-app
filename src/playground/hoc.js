// Higher Order Component (HOC) - A component (HOC) that renders another component

/* goals of HOC:
    - reuse code
    - render hijacking
    - prop manipulation
    - abstract state
*/
import React from 'react';
import ReactDOM from 'react-dom';

// a regular component
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// withAdminWarning returns the HOC
// here we use the spread operator on props to pass in to Wrapped Component any props
// that were passed in to AdminInfo
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
        ) : (
          <p>Please login to view the info</p>
        )}
    </div>
  );
};

// the HOC AdminInfo
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));
