import moment from 'moment';

export const transactionDate = (date: string) => {
  const transactionDate = moment(date);
  const today = moment();

  //if (today.isSameOrAfter(transactionDate.add(2, 'days'))) {
  return moment(date).format('D MMM Y H:m');
  //} else {
  //  return moment(date).fromNow();
  // }
};
