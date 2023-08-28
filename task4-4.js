class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
  }
}

function showMonthName(month) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  if (typeof month !== 'number' || month < 1 || month > 12) {
    throw new MonthException("Incorrect month number.");
  }

  return monthNames[month - 1];
}

try {
  const monthNumber = parseInt(prompt("Enter the month number:"));
  const monthName = showMonthName(monthNumber);
  console.log(`The name of the month is: ${monthName}`);
} catch (error) {
  if (error instanceof MonthException) {
    console.error(`Error: ${error.message}`);
  } else {
    console.error(`An unexpected error occurred: ${error.message}`);
  }
}
