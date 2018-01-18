// required to mock a library
const moment = require.requireActual('moment');

// the mocked version of the moment() function
export default (timestamp = 0) => {
  return moment(timestamp);
};
