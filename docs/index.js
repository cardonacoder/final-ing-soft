
let reg = document.getElementById("reg");
let ing = document.getElementById("ing");
let button = document.getElementById("button");

function regFX(){ 

    reg.classList.add("active"); 
    ing.classList.remove("active");
    ing.classList.add("inactive");
    ing.classList.add("underlineHover");
    button.value ="Registrarse";
}

function ingFX(){ 

    ing.classList.add("active"); 
    reg.classList.remove("active");
    reg.classList.add("inactive");
    reg.classList.add("underlineHover");
    button.value ="ingresar";
}


reg.addEventListener("click", regFX);
ing.addEventListener("click", ingFX);



document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let elem = document.querySelector('form').elements;

    console.log("Usuario", elem.username.value);
    console.log("Password", elem.password.value);
});