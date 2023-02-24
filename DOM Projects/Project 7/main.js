
const list1 = document.querySelectorAll(".main__languages a")


list1.forEach(e=>{if(e.innerText.includes("2.0")) e.style.display = "none";})


const formInput = document.querySelector(".main__form-input")
const formBtn = document.querySelector(".main__form-btn")

formInput.disabled = false;
formBtn.disabled = false;

formBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    list1.forEach(e=>{
        e.style.display = "inline-block";
    })
})