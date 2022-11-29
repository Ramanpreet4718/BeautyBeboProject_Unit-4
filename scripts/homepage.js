document.querySelector(".fa-user").addEventListener("click", dropdown);

function dropdown(){
    var menu = document.querySelector(".loginRegisterDropdown");
    if(menu.style.display=="none"){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
}

