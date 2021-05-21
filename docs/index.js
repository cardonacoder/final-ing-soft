
let reg = document.getElementById("reg");
let ing = document.getElementById("ing");
let button = document.getElementById("button");
let emailBox = document.getElementById("email");
let logRegPage = document.getElementById("logRegPage");

function regFX(){ 

    reg.classList.add("active"); 
    ing.classList.remove("active");
    ing.classList.add("inactive");
    ing.classList.add("underlineHover");
    button.value ="Registrarse";
    emailBox.style.display = "inline";
    logRegPage.src = "./media/1.RegLandigPage.png";
}

function ingFX(){ 

    ing.classList.add("active"); 
    reg.classList.remove("active");
    reg.classList.add("inactive");
    reg.classList.add("underlineHover");
    button.value ="ingresar";
    emailBox.style.display = "none";
    logRegPage.src = "./media/1.LogLandigPage.png";
}


reg.addEventListener("click", regFX);
ing.addEventListener("click", ingFX);



document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let elem = document.querySelector('form').elements;

    console.log("Usuario", elem.username.value);
    console.log("Password", elem.password.value);
});