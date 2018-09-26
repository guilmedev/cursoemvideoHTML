$(document).ready(function(){

//Change img with animations
function changeAnim (id, attr){
    $(id).hide();
    $(id).attr("src",attr);    
    $(id).fadeIn(500);
}
    //Mouseover Home
$('a[href^="index.html"]').mouseover(function(){
     changeAnim("#icone","_imagens/home.png");
});

//Todos os itens da lista ao sair mostram o icone do óculos
$(".lista-menu-nav").children().mouseleave(function(){
   
    changeAnim("#icone","_imagens/glass-oculos-preto-peq.png");
});

//Mouseover specs
$('a[href^="specs.html"]').mouseover(function(){
    changeAnim("#icone","_imagens/especificacoes.png");
});
//Mouseover imagens
$('a[href^="fotos.html"]').mouseover(function(){
    changeAnim("#icone","_imagens/fotos.png");
});
//Mouseover multi
$('a[href^="multimidia.html"]').mouseover(function(){
    changeAnim("#icone","_imagens/multimidia.png");
});
//Mouseover fale-conosco
$('a[href^="fale-conosco.html"]').mouseover(function(){
    changeAnim("#icone","_imagens/contato.png");
});



});