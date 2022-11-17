
const difVisit = document.querySelector(".difVisit");
const pElement = document.querySelector(".visits p");






const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;

let lastVisit = Number(window.localStorage.getItem("lastVisit"));
console.log(lastVisit)
const d = new Date();
const time = d.getTime();
console.log(time)
const dif = (time - lastVisit);
console.log(dif)


const difSeconds = Math.round(dif/1000);
const difMinutes = Math.round(dif/minute);
const difHours = Math.round(dif/hour);
const difDays = Math.round(dif/day);
let timeText = "Days since last visit: " + difDays;  
difVisit.textContent = timeText;


if (lastVisit === 0) {
    pElement.textContent = `This is your first visit!`;
	
} 
else {
    difVisit.textContent = timeText;
	
}
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
 
