var usuario = prompt('Insira o número de seu cartão');

function isValidCard(creditCardNumber){

	var arraySplit = creditCardNumber.split("");
  var arrayReverse = arraySplit.reverse();

	for (i = 0; i < arrayReverse.length; i++){
	arrayReverse[i] = parseInt(arrayReverse[i])
	}

	//console.log(arrayReverse)

  for (i = 1; i < arrayReverse.length; i = i + 2){

    var result = arrayReverse[i] * 2;

  	if(result >= 10){
    	var str = result.toString();
    	var split = parseInt(str[0]) + parseInt(str[1]);
    	arrayReverse[i] = split;
  		} else {
			arrayReverse[i] = arrayReverse[i] * 2
		}
	}

	//console.log(arrayReverse)

  var numSum = arrayReverse.reduce(function(acumulador, valorAtual){
  return acumulador + valorAtual;
});
	//console.log(numero);


  var somatoria  = numSum % 10;

  if (somatoria === 0){
  return alert("Seu cartão é válido");
} else {
  return alert("Seu cartão não é válido");
}
}

//console.log(isValidCard('30111122223331'));
