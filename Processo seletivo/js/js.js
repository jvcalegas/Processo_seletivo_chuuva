function leiaMais(){
    let pontos=document.getElementById("pontos");
let maisTexto=document.getElementById("mais");
let btnLeiaMais=document.getElementById("btnLeiaMais");

if(pontos.style.display==="none"){
    pontos.style.display="inline";
    maisTexto.style.display="none";
    btnLeiaMais.innerHTML="leia mais";

}else{
    pontos.style.display="none";
    maisTexto.style.display="inline";
    btnLeiaMais.innerHTML="leia menos";
}

}