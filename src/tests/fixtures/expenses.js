import moment from 'moment';

/* for the startDate and endDate tests, we have to use createdAt values that are
more than seconds apart, they must be days apart since select expenses finds matches
to filters by days */

// Test Data
export default [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
},{
  id: '2',
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},{
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}];
