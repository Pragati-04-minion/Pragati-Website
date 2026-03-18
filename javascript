/* Smooth Scroll */

function scrollToSection(){
document.querySelector("#about").scrollIntoView({
behavior:"smooth"
})
}

/* Typing Effect */

const text="Aspiring Web Developer | Frontend Developer"
let i=0

function typing(){

if(i < text.length){

document.querySelector(".typing").textContent += text.charAt(i)

i++

setTimeout(typing,80)

}

}

typing()

/* Contact Form Validation */

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault()

let email=document.getElementById("email").value
let phone=document.getElementById("phone").value

if(phone.length < 10){

alert("Enter valid phone number")
return

}

alert("Message Sent Successfully!")

this.reset()

})