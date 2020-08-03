


  function acaoBotao(params){
    var valor01,valor02,resulatdio,operacao
    valor01 = prompt("Digite o primeiro valor:  ")
    operacao = prompt("Digite a operação: Ex: + ,- , * ,  / :  ")
    valor02 = prompt("Digite o segundo valor:  ") 
  if (operacao == "+") {
    resultado = parseInt(valor01) + parseInt(valor02)
  }
  if (operacao == "-") {
    resultado = parseInt(valor01) - parseInt(valor02)
  }
  if (operacao == "*") {
    resultado = parseInt(valor01) * parseInt(valor02)
  }
  if (operacao == "/") {
    resultado = parseInt(valor01) / parseInt(valor02)
  }


  
  document.getElementById("paragrafo").innerText = resultado
  }


  