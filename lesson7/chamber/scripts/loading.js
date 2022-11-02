const allImages = document.querySelectorAll("img[data-src]")

const lazyLoad = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"))
    img.onload = () => {
        img.removeAttribute("data-src")
        img.className = "in"
    };
};


const options = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
}

if ('IntersectionObserver' in window) {
    const obsrvr = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                lazyLoad(item.target)
                observer.unobserve(item.target)
            }
        })
    }, options)
    allImages.forEach((img) => {
        obsrvr.observe(img)
    })
}
else {
    allImages.forEach((img) => {
        lazyLoad(img)
    })
}



























































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


 




























