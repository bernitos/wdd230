
let form = document.getElementById('form')
 
form.addEventListener('submit',(e) => {

    e.preventDefault()

    let firstname = document.getElementById('firstname').value

    let email = document.getElementById('email').value

    let phone = document.getElementById('phone').value

    let instruction = document.getElementById('instruction').value

    let select = document.getElementById('select').value

   

    let datea  =document.getElementById('datea').value

    if(firstname == "" || email == "" || phone == "" 
    || instruction == "" || select == ""){
        alert("Please enter all the fields")
    }
    else{
        document.getElementById('result').innerHTML = `
        <h3> <strong> Name </strong>: ${firstname}</h3>
        <h3><strong> Email </strong>: ${email}</h3>
        <h3><strong> phone</strong>: ${phone}</he>
        <h3> <strong>Date</strong>: ${datea}</h3>
        
        <h3> <strong>Fruit mix</strong>: ${select}</h3>
       
        <h3> <strong>instructions</strong>: ${instruction}</h3>
        `
    }
    
})
