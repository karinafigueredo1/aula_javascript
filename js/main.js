function clicou (){
    document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar";
    //console.log(document.getElementById("agradecimento"))
    //alert ("Obrigado por clicar")
}
function redirecionar(){
    window.open("https://www.linkedin.com/in/karina-figueredo/")
    //window.location.href = "https://www.linkedin.com/in/karina-figueredo/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert ("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui ";
    elemento.innerHTML = "Passe o mouse aqui ";

}
function load(){
    alert("Pagina Carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value)
}
/*var d = new Date();
alert (d.getMonth()+1);
*/
/*var count;
for(count =0; count <= 5; count++){
    alert(count);
};
*/

/*var count = 0
while (count <= 5){
    console.log(count);
    count =count + 1
};
*/
/*var idade = prompt("Qual a sua idade?")
if (idade >= 18){
    alert("Maior de idade ");
}else{
    alert("Menor de Idade");
}
*/

/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/
//var lista = ["maça","pera","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);





//var nome= "Karina Figueredo";
//var idade = 21;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//console.log(nome);
//console.log(idade);
//console.log(frase.toUpperCase());

