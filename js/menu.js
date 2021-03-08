openMenu =  () => {
    document.getElementById("menu").style.width = "250px";
    elements = document.getElementsByTagName("li");
    for(let i = 0; i<elements.length; i++){
        elements[i].style.display = "block";
    }
    document.getElementById("hamburger").onclick = closeMenu;
}

closeMenu = () => {
    document.getElementById("menu").style.width = "0";
    elements = document.getElementsByTagName("li");
    for(let i = 0; i<elements.length; i++){
        elements[i].style.display = "none";
    }
    document.getElementById("hamburger").onclick = openMenu;
}

openModal = () => {
    document.getElementById("modal").style.display="block";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

closeModal = () => {
    document.getElementById("modal").style.display="none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}