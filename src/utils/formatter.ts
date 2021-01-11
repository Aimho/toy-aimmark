/**
 * Date를 원하는 포맷으로 변경해준다.
 * @param value 변환할 원본 데이터
 * @param format 원하는 포맷
 * @param visibleZero 1자리 숫자인 경우 0을 표시할지 flag
 */
export const formatDate = (value: string, format: string): string => {
  const date = new Date(value);

  let year = date.getFullYear(),
    month = '' + (date.getMonth() + 1),
    day = '' + date.getDate(),
    hour = '' + date.getHours(),
    minutes = '' + date.getMinutes();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  if (hour.length < 2) hour = '0' + hour;
  if (minutes.length < 2) minutes = '0' + minutes;

  const result = format
    .replace('YYYY', String(year))
    .replace('MM', String(month))
    .replace('DD', String(day))
    .replace('HH', String(hour))
    .replace('mm', String(minutes));

  return result;
};

/**
 * 숫자를 통화 포맷으로 변경해준다.
 * @param value 변환할 원본 데이터
 */
export const formatCurrency = (value?: number): string => {
  if (!value || isNaN(value)) return '';
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * fileSize를 맞는 단위로 변경해준다.
 * @param value 변환할 원본 데이터
 */
export const formatFileSize = (value?: number): string => {
  if (!value) return '';

  const unit = ['bytes', 'kb', 'mb', 'gb', 'tb', 'pb'];
  const convert = Math.floor(Math.log(value) / Math.log(1024));
  return `${(value / Math.pow(1024, convert)).toFixed(2)} ${unit[convert]}`;
};
