var localData = JSON.parse(localStorage.getItem("cnxData"));


document.getElementById("fullname").childNodes[1].textContent = localData.activeUser.fullname;
document.getElementById("email").childNodes[1].textContent = localData.activeUser.email;
