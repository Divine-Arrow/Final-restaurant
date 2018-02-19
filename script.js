window.onscroll = function () {
    myFunction()
};
var nav = document.querySelector(".navbar");
var container = document.querySelector(".navbar .container");
var img = document.querySelector(".navbar-brand img");

function myFunction() {
    if (window.pageYOffset > 200) {
          nav.style.backgroundColor = "#4f5052";
        img.style.width = "3rem";
        img.style.height = "45px";
        img.style.marginLeft = "110%";
        img.style.marginTop = "-10%";
        img.style.transition = "0.3s";
        img.classList.remove("removeWh");
        img.classList.remove("boxShadowAdd");
        img.classList.add("boxShadowRemove");
        container.style.padding = "0px";
        

        console.log("fdfdgfdgfad");
    } else {
        /* document.getElementById("myP").className = "";*/
        console.log("rttrr");
          nav.style.backgroundColor = "transparent";
        img.classList.remove("onscrollImg");
        img.style.width = "4rem";
        img.style.height = "60px";
        img.style.marginLeft = "110%";
        img.style.transition = "0.3s";
        img.classList.remove("boxShadowRemove");
        img.classList.add("boxShadowAdd");
        
    }
}
