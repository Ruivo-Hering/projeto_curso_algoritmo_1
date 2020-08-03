/*
Var
// Seção de Declarações das variáveis 
   numero, fatorial, contador: inteiro
   

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite o nº ao qual quer saber o fatorial:  ")
   leia(numero)
   fatorial := 1
   para contador de 1 ate numero faca
        fatorial := fatorial * contador
   fimpara
   escreva("O fatorial do nº " , numero, " é  " , fatorial)
   */

  function acaoBotao(params){
    var numero, fatorial, contador
    numero = prompt("Digite o nº ao qual quer saber o fatorial:  ")
    fatorial = 1
    for (contador = 1; contador <= numero; contador ++){
        fatorial = fatorial * contador
    }
  
  document.getElementById("paragrafo").innerText = "O fatorial de "  + numero + " é " + fatorial
  }
