//show month name based on number

const namemonth = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const month = prompt("Inform month's number");
const numbermonth = Number(month);

let message = "Invalid month!";

if (numbermonth != NaN && numbermonth > 0 && numbermonth <= 12) {
  message = `${
    namemonth[numbermonth - 1]
  } is the month of number ${numbermonth}`;
} else {
  for (let index = 0; index < namemonth.length; index++) {
    if (month.toLowerCase() === namemonth[index].toLowerCase()) {
      message = `${month} is the month of number ${index + 1}`;
      break;
    }
  }
}
console.log(message);
