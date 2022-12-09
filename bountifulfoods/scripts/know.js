const input =document.getElementById("Request Membership")
const scElement = document.getElementById("sc_element")

if(typeof(localStorage) === undefined){

    console.log("Your browser do not supports localstorage : C")
}

if(localStorage.getItem("sc")){
    scElement.innerText = localStorage.getItem("sc")
    
}else{
    localStorage.setItem("sc", "0")
}

input.onclick = ()=>{
    const currentSc = localStorage.getItem("sc")
    localStorage.setItem("sc" , parseInt(currentSc) + 1)
    scElement.innerText = localStorage.getItem("sc")
}
