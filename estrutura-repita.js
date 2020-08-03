/*
   sairLoop: caracter
   valor01,valor02: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    repita
       escreval("Digite o 1º valor: ")
       leia(valor01)
       escreval("Digite o 2º valor: ")
       leia(valor02)
       escreval ("resultado:  ", valor01 + valor02)
       escreval ("Deseja sair?  SIM (S) ou NÃO (N)")
       leia (sairLoop)
    ate sairLoop <> "N"
    */
   function acaoBotao(){
    var sairLoop, valor01, valor02
    do{
       valor01 = prompt("Digite o 1º valor: ")
       valor02 = prompt("Digite o 2º valor: ")
       document.getElementById("paragrafo").innerText = "Resultado:" + (parseInt(valor01) + parseInt(valor02))
      sairLoop = prompt ("Deseja sair?  SIM (S) ou NÃO (N)")
    }while(sairLoop == "N")
   }
