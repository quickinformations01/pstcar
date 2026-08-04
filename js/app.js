document.addEventListener("DOMContentLoaded",()=>{

const app=document.body;

function loadPage(page){

fetch("pages/"+page)

.then(r=>r.text())

.then(html=>{

app.innerHTML=html;

});

}

const p=document.getElementById("passengerBtn");

const d=document.getElementById("driverBtn");

const l=document.querySelector(".login-btn");

if(p){

p.onclick=()=>loadPage("passenger-register.html");

}

if(d){

d.onclick=()=>loadPage("driver-register.html");

}

if(l){

l.onclick=()=>loadPage("login.html");

}

});
