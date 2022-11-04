const btn = document.querySelector("#hamBtn");
const nav = document.querySelector("#headerNav");

btn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

let lastMod = document.querySelector("#lastMod");
let date = document.querySelector(".date");
let current = new Date();

let mod = document.lastModified;
let year = new Date().getFullYear();
let currentDate = `${mod}`;

function newDate(date){
 return new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(date);
}
const formatDate = newDate(current)

if (date) {
  date.innerHTML = formatDate;
  lastMod.innerHTML = `&copy; ${year} Marifa chamber of Commerce | Kissi A. Bernitos |Brigham Young University|<br> Last Modified: ${currentDate}`;
}
 
const day = current.getDay();
const msg = document.querySelector("#msg");

if (day == 1 || day == 2) {
  msg.classList.add("show");
} else {
  msg.classList.add("hide");
}


	
	
	
	

 let lastVisited = window.localStorage.getItem("lastVisited");
let lastVisitedDisplay = document.querySelector("#lastVisited");
if (lastVisited) {
    let days = Math.round((Date.now() - lastVisited));
    lastVisitedDisplay.textContent = `You visited this page ${days} days ago.`;
} else {
    lastVisitedDisplay.textContent = `You visited this page for the first time today.`;
}






















































































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
















































let lastMod = document.querySelector("#lastMod");
let date = document.querySelector(".date");
let current = new Date();

let mod = document.lastModified;
let year = new Date().getFullYear();
let currentDate = `${mod}`;

function newDate(date){
 return new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(date);
}
const formatDate = newDate(current)

if (date) {
  date.innerHTML = formatDate;
  lastMod.innerHTML = `&copy; ${year} Marifa chamber of Commerce | Kissi A. Bernitos |Brigham Young University|<br> Last Modified: ${currentDate}`;
}
 
const day = current.getDay();
const msg = document.querySelector("#msg");

if (day == 1 || day == 2) {
  msg.classList.add("show");
} else {
  msg.classList.add("hide");
	


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
const btn = document.querySelector("#hamBtn");
const nav = document.querySelector("#headerNav");

btn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

let lastMod = document.querySelector("#lastMod");
let date = document.querySelector(".date");
let current = new Date();

let mod = document.lastModified;
let year = new Date().getFullYear();
let currentDate = `${mod}`;

function newDate(date){
 return new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(date);
}
const formatDate = newDate(current)

if (date) {
  date.innerHTML = formatDate;
  lastMod.innerHTML = `&copy; ${year} Marifa chamber of Commerce | Kissi A. Bernitos |Brigham Young University|<br> Last Modified: ${currentDate}`;
}
 
const day = current.getDay();
const msg = document.querySelector("#msg");

if (day == 1 || day == 2) {
  msg.classList.add("show");
} else {
  msg.classList.add("hide");
}




 let lastVisited = window.localStorage.getItem("lastVisited");
let lastVisitedDisplay = document.querySelector("#lastVisited");
if (lastVisited) {
    let days = Math.round((Date.now() - lastVisited));
    lastVisitedDisplay.textContent = `You visited this page ${days} days ago.`;
} else {
    lastVisitedDisplay.textContent = `You visited this page for the first time today.`;
}




















	
	

