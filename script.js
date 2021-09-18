function Converter(){
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valEmDolarNumerico = parseFloat(valor)

  var valorEmReal = valEmDolarNumerico * 5.29

  var elementoValorConvertido = document.getElementById("valorConvertido")
  var valorConvertido = "O resultado em real é R$" + valorEmReal
  elementoValorConvertido.innerHTML = valorConvertido
}
