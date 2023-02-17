const inputName = document.querySelector(".userName")
const inputEmail = document.querySelector(".userEmail")
const inputMessage = document.querySelector(".userMessage")
const outputName = document.querySelector(".enterName")
const outputEmail = document.querySelector(".enterMail")
const outputMessage = document.querySelector(".enterMessage")

window.localStorage.setItem("inputName",inputName.value)

const btns = document.querySelectorAll("button")


btns[2].addEventListener("click",(event)=>{   
    outputName.value = inputName.value;
    outputEmail.value = inputEmail.value;
    outputMessage.value = inputMessage.value;
    event.preventDefault()
})

btns[1].addEventListener("click",(event)=>{
    outputName.value = "";
    outputEmail.value = "";
    outputMessage.value = "";
    event.preventDefault()
})
