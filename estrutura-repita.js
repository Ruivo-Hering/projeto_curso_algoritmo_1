
   function acaoBotao(){
    var sairLoop, valor01, valor02
    do{
       valor01 = prompt("Digite o 1º valor: ")
       valor02 = prompt("Digite o 2º valor: ")
       document.getElementById("paragrafo").innerText = "Resultado:" + (parseInt(valor01) + parseInt(valor02))
      sairLoop = prompt ("Deseja sair?  SIM (S) ou NÃO (N)")
    }while(sairLoop == "N")
   }
