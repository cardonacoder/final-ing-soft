
let reg = document.getElementById("reg");
let ing = document.getElementById("ing");
let button = document.getElementById("button");
let fullNameBox = document.getElementById("fullname");
let confirmPasswordBox = document.getElementById("confirmPassword");
let logRegPage = document.getElementById("logRegPage");

function regFX(){ 

    reg.classList.add("active"); 
    ing.classList.remove("active");
    ing.classList.add("inactive");
    ing.classList.add("underlineHover");
    button.value ="Registrarse";
    fullNameBox.style.display = "inline";
    confirmPasswordBox.style.display = "inline";
    logRegPage.src = "./media/1.RegLandigPage.png";
    let elem = document.querySelector('form').elements;
    clearForm(elem);
}

function ingFX(){ 

    ing.classList.add("active"); 
    reg.classList.remove("active");
    reg.classList.add("inactive");
    reg.classList.add("underlineHover");
    button.value ="Ingresar";
    fullNameBox.style.display = "none";
    confirmPasswordBox.style.display = "none";
    logRegPage.src = "./media/1.LogLandigPage.png";
    let elem = document.querySelector('form').elements;
    clearForm(elem);
}


function clearForm(e){
    e.fullname.value = "";
    e.password.value = "";
    e.confirmPassword.value = "";
    e.email.value = "";
    e.teacher.checked = false;
    e.student.checked = false;
}

reg.addEventListener("click", regFX);
ing.addEventListener("click", ingFX);



document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let elem = document.querySelector('form').elements;

    if(elem.button.value === "Ingresar"){

        let localData = JSON.parse(localStorage.getItem("cnxData"));

        let userData = {
            email: elem.email.value,
            password: elem.password.value,
            role: elem.teacher.checked ? "teacher" : "student"
        };

        if(userData.role === "teacher"){
            let tempTea = localData.users.teachers.find( ({ email }) => email === elem.email.value );

            if(tempTea===undefined){
                alert("Profesor no registrado");
            }else{

                if(tempTea.password !== elem.password.value){
                    alert("Contraseña inválida");
                }else{
                    localData.activeUser = tempTea;
                    localStorage.setItem("cnxData",JSON.stringify(localData));
                    clearForm(elem);
                    window.location.href = "teacher.html";
                }
            }

        }else{
            let tempEst = localData.users.students.find( ({ email }) => email === elem.email.value );

            if(tempEst===undefined){
                alert("Estudiante no registrado");
            }else{
                if(tempEst.password !== elem.password.value){
                    alert("Contraseña inválida");
                }else{
                    localData.activeUser = tempEst;
                    localStorage.setItem("cnxData",JSON.stringify(localData));
                    clearForm(elem);
                    window.location.href = "student.html";
                }
            }
        }

    }
    else{
        /* ########### REGISTRO ########### */
        if(elem.password.value !== elem.confirmPassword.value){

            alert("Las contraseñas no coinciden");

        }else{
           
            let userData = {
                fullname: elem.fullname.value,
                password: elem.password.value,
                email: elem.email.value,
                role: elem.teacher.checked ? "teacher" : "student"
            };

            let localData;

            /* 
            
            if(localStorage.getItem("cnxData")){
                if(JSON.parse(localStorage.getItem("cnxData")).users.email_List.indexOf(elem.email.value)!==-1)
            */

            if(localStorage.getItem("cnxData")){
                if(JSON.parse(localStorage.getItem("cnxData")).users.email_List.indexOf(elem.email.value)!==-1){
                    alert("El correo electrónico ingresado ya está registrado");
                }else{
                    if(userData.role === "teacher"){

                        if(localStorage.getItem("cnxData")){

                            localData = JSON.parse(localStorage.getItem("cnxData"));
                            localData.users.teachers.push(userData);
                            localData.users.usersQty+=1;
                            localData.users.email_List.push(userData.email);
                        }else{

                            localData  = { 

                                activeUser: null,
                                users: { 
                                    students:[],
                                    teachers:[],
                                    usersQty: 0,
                                    email_List: []
                                },
                            };

                            localData.users.teachers.push(userData);
                            localData.users.usersQty+=1;
                            localData.users.email_List.push(userData.email);
                            
                        }

                    }else{
                        if(localStorage.getItem("cnxData")){

                            localData = JSON.parse(localStorage.getItem("cnxData"));
                            localData.users.students.push(userData);
                            localData.users.usersQty+=1;
                            localData.users.email_List.push(userData.email);
                        }else{

                            localData  = { 

                                activeUser: null,
                                users: { 
                                    students:[],
                                    teachers:[],
                                    usersQty: 0,
                                    email_List: []
                                },
                            };

                            localData.users.students.push(userData);
                            localData.users.usersQty+=1;
                            localData.users.email_List.push(userData.email);
                            
                        }
                    }
        
                    localStorage.setItem("cnxData",JSON.stringify(localData));
            
                    alert("Registro exitoso");
            
                    clearForm(elem);
                    ingFX();
                }
            }else{
                if(userData.role === "teacher"){

                    if(localStorage.getItem("cnxData")){

                        localData = JSON.parse(localStorage.getItem("cnxData"));
                        localData.users.teachers.push(userData);
                        localData.users.usersQty+=1;
                        localData.users.email_List.push(userData.email);
                    }else{

                        localData  = { 

                            activeUser: null,
                            users: { 
                                students:[],
                                teachers:[],
                                usersQty: 0,
                                email_List: []
                            },
                        };

                        localData.users.teachers.push(userData);
                        localData.users.usersQty+=1;
                        localData.users.email_List.push(userData.email);
                        
                    }

                }else{
                    if(localStorage.getItem("cnxData")){

                        localData = JSON.parse(localStorage.getItem("cnxData"));
                        localData.users.students.push(userData);
                        localData.users.usersQty+=1;
                        localData.users.email_List.push(userData.email);
                    }else{

                        localData  = { 

                            activeUser: null,
                            users: { 
                                students:[],
                                teachers:[],
                                usersQty: 0,
                                email_List: []
                            },
                        };

                        localData.users.students.push(userData);
                        localData.users.usersQty+=1;
                        localData.users.email_List.push(userData.email);
                        
                    }
                }
    
                localStorage.setItem("cnxData",JSON.stringify(localData));
        
                alert("Registro exitoso");
        
                clearForm(elem);
                ingFX();
            }

        }
    }
});