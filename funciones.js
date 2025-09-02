const boton = document.getElementById("modo")
const info = document.querySelector(".info")
const info2 = document.querySelectorAll(".info2")
const info3 = document.querySelectorAll(".info3")
const caja = document.querySelectorAll(".caja")
const header = document.querySelector("header")
const container = document.getElementById("container")
const footer = document.querySelector("footer")
const titulos = document.querySelectorAll("h1")
const titulos2 = document.querySelectorAll("h4")
const registro = document.getElementById("registro")
const instagram = document.getElementById("instagram")
const linkedin = document.getElementById("linkedin")
const boton2 = document.getElementById("btnRegistro");

registro.setAttribute("href", "register.html")
instagram.setAttribute("href", "https://www.instagram.com/nachofzh/")
linkedin.setAttribute("href", "https://www.linkedin.com/in/ignacio-martin-fazah-beiroa-637a76247/")


    
boton.addEventListener("click", function(){
    info.classList.toggle("dark")
    header.classList.toggle("darkB")
    container.classList.toggle("dark")
    footer.classList.toggle("darkB")
    boton.classList.toggle("darkB")

    for(var i = 0; i < titulos2.length; i++){
        titulos2[i].classList.toggle("dark")
    } 

    for(var i = 0; i < info2.length; i++){
        info2[i].classList.toggle("dark")
    }    

    for(var i = 0; i < info2.length; i++){
        info3[i].classList.toggle("dark")
    }    

    for(var i = 0; i < caja.length; i++){
        caja[i].classList.toggle("dark")
    }
    
    for(var i = 0; i < titulos.length; i++){
        titulos[i].classList.toggle("dark")
    } 
})


boton2.addEventListener("click", () => {
// redirige a la página de registro
    window.location.href = "register.html";
});