function useDateFormat(stringDate: string) {
  const date = new Date(stringDate);
  const timezoneOffset = date.getTimezoneOffset();
  const localTimeDate = new Date(date.getTime() - timezoneOffset * 60 * 1000);
  return localTimeDate.toISOString().split('T')[0];
}

export default useDateFormat;
