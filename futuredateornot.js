function isFutureDate(dateInput) {
    // Convert the input to a Date object
    const inputDate = new Date(dateInput);

    // Get the current date and time
    const currentDate = new Date();

    // Compare the input date with the current date
    return inputDate > currentDate;
}

// Example usage
const date1 = "2025-02-01"; // Example future date

console.log(isFutureDate(date1)); // true
