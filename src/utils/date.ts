import { formatDate } from './formatter';

export const getMinDateFromToday = (min: number) => {
  const today = new Date();
  const minDate = today.setDate(today.getDate() + min);
  return formatDate(new Date(minDate).toString(), 'YYYY-MM-DD');
};
