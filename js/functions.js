function changeBodyBackgroungImage(_image){
    event.preventDefault();
    if(_image == 'dark'){
        document.getElementsByTagName('body')[0].style.backgroundImage = "url(img/Servers22-1.jpg)";
    } else {
        document.getElementsByTagName('body')[0].style.backgroundImage = "url(img/Ridge-Design-Website-Design-Background.jpg)";
    }
    
}

function changeColorPortfolio(){
    document.getElementById('title-topo').style.color = 'white';
    let element = document.getElementById("topo");
    element.classList.remove("white-background-transparent");
}