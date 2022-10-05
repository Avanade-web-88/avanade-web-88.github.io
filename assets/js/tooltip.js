
const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector(".top-site");

// quem é o target
// quem.addEventListener("evento", (evento=> {}));


tooltip.addEventListener("mouseover", (e) => {

    console.log(e);
    console.log("Altura da página", body.clientHeight);
    console.log("largura da página", body.clientWidth);
    console.log("Altura da tooltip", tooltip.clientHeight);
    console.log("largura da tooltip", tooltip.clientWidth);
    console.log("Altura da mouse", e.clientY);
    console.log("largura da moues", e.clientX);

    if(document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
    }
    const newDiv = document.createElement("div");
    
    newDiv.classList.add("tooltip");
    newDiv.innerHTML = "Meu tool com muita dicas tops demais, aparece e desaparece.";
    newDiv.style.position = "absolute";
    newDiv.style.top = e.clientY + "px";
    newDiv.style.left = (e.clientX + 200 > body.clientWidth ? e.clientX - 210 : e.clientX + 200 ) + "px";
    newDiv.style.display = "flex";
    header.appendChild(newDiv);
});

tooltip.addEventListener("mouseout",(e)=>{
    if(document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
    }
})