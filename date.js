// Date.js // 
const now = new Date();
console.log(now); // current date & time.
console.log(now.getFullYear()); // current year 
console.log(now.getMonth() + 1);  // current month 
console.log(now.getHours());  // current hour 
console.log(now.getMinutes());  // current minutes 
console.log(now.getDate());  // current date 
console.log(now.getSeconds());  // current seconds 

//  convert date to string
const n = new Date(2001,2,19);
console.log(n.toDateString()); // tue nov 26 2023.

// Indian standard time (IST)
const ind = new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata'});
console.log(ind);


const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const today = days[new Date().getDay()];
console.log(today);


console.log(new Date().toLocaleDateString('en-Us',{weekday: 'short'}));