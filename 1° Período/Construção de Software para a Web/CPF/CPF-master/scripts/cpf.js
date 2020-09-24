var btnV = document.getElementById("btn_verificar");
btnV.addEventListener("click", verificaListener);

var btnG = document.getElementById("btn_gerar");
btnG.addEventListener("click", gerarListener);

function gerarListener() {
	// body...
	var cpfR = "";
	for(var i = 0; i < 9; i ++){
		cpfR = cpfR + Math.trunc(Math.random() * 10);
	}
cpfR = cpfR + calculaDV1(cpfR);
cpfR = cpfR + calculaDV2(cpfR);
document.getElementById("cpf").value = cpfR
// Mensagem
document.getElementById("output").innerHTML = "CPF GERADO";
    	document.getElementById("divOutput")
    	        .setAttribute("class", "w3-panel w3-blue");
    	        document.getElementById("divOutput").style.visibility = "visible";
}

function verificaListener() {
	// body...
	var input = document.getElementById("cpf");
	var cpf = input.value;
    var valido = verificaCPF(cpf);
    if(valido){
    	console.log("CPF VALIDO");
    	document.getElementById("output").innerHTML = "CPF VALIDO";
    	document.getElementById("divOutput")
    	        .setAttribute("class", "w3-panel w3-green");
    }else{
    	console.log("CPF INVALIDO");
    	document.getElementById("output").innerHTML = "CPF NOM ECXISTE!!!";
    	document.getElementById("divOutput")
    	        .setAttribute("class", "w3-panel w3-red");
    }
    document.getElementById("divOutput").style.visibility = "visible";
}

function verificaCPF(cpf) {
	var dv1 = calculaDV1(cpf);
	var dv2 = calculaDV2(cpf);
	if(dv1 == cpf[9] && dv2==cpf[10]){
		return true;
	}else{
		return false;
	}
}
function calculaDV1(cpf) {
	var pesos = [10,9,8,7,6,5,4,3,2];
	var soma = 0;
	for(var i = 0; i<9;i++){
		soma = soma + (pesos[i]* Number(cpf[i]) );
	}
	var resto = soma%11;
	if(resto < 2){
		return 0;
	}else{
		return 11 - resto;
	}
}
function calculaDV2(cpf) {
	var pesos = [11,10,9,8,7,6,5,4,3,2];
	var soma = 0;
	for(var i = 0; i<10;i++){
		soma = soma + (pesos[i]* Number(cpf[i]) );
	}
	var resto = soma%11;
	if(resto < 2){
		return 0;
	}else{
		return 11 - resto;
	}
}
