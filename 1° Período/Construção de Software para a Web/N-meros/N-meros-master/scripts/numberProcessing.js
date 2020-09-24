var urlParams = new URLSearchParams(window.location.search);
var numero = Number(urlParams.get('numero'));
var op = urlParams.get('op');
switch(op){
	case"pi":
	if(numero%2 == 0){
		document.write("<h1> Numero PAR </h1>");
	}else{
		document.write("<h1> Numero IMPAR </h1>");
	}
	break;
	case "primo":
	document.write("<h1> Opção Indisponivel </h1>");
	break;
	default:
	document.write('<img src = "imgs/dragon.png">');
}