
// -------------- Visit Difference calculator -------------- 
// initialize display elements
const difVisit = document.querySelector(".difVisit");
const pElement = document.querySelector(".visits p");

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;

let lastVisit = Number(window.localStorage.getItem("lastVisit"));
const d = new Date();
const time = d.getTime();
const dif = (time - lastVisit);

const difSeconds = Math.round(dif/1000);
const difMinutes = Math.round(dif/minute);
const difHours = Math.round(dif/hour);
const difDays = Math.round(dif/day);
let timeText;

// Saved for later...
// if(difSeconds <= 120){
// 	timeText = difSeconds +" seconds ";
// }
// else if(difMinutes <= 120){
// 	timeText = difMinutes +" minutes ";
// }
// else if(difHours <= 48){
// 	timeText = difHours +" hours ";
// }
// else{
// 	timeText = difDays +" days ";
// }

timeText = difDays +" days ";  
difVisit.textContent = timeText;


// determine if this is the first visit or display the number of visits.
if (dif !== 0) {
	difVisit.textContent = timeText;
} 
else {
	pElement.textContent = `This is your first visit!`;
}

// store the this visit as the new last visit

localStorage.setItem("lastVisit", time);
