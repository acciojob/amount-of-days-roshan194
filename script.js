//your JS code here. If required.
function daysOfAYear(year) {
  // Check if it's a leap year:
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  // Return 366 for leap years, otherwise 365
  return isLeapYear ? 366 : 365;
}