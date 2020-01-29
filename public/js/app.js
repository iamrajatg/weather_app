console.log('Client side javascript file is loaded!')





const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    if(location.length == 0)
        return msg1.textContent = "Please Enter A Location"
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
            msg1.textContent = data.error
        else{
            msg1.textContent = data.forecast
            msg2.textContent = data.location
        }
    })
})
})
