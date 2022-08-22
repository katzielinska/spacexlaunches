const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const formatDate = (date: Date) => {
  console.log(date.toLocaleString());
  return date.toLocaleString("en-US", DATE_OPTIONS);
};
