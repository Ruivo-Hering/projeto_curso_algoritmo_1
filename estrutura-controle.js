/*escreval("Digite o nome do aluno: ")
   leia (nome)
   escreval("Digite a matricula do aluno: ")
   leia (matricula)
   escreval("Digite a nota 1 do aluno: ")
   leia(nota01)
   escreval("Digite a nota 2 do aluno: ")
   leia (nota02)
   media := (nota01 + nota02) / 2
   
   se media >= 50 entao
      escreval("Aprovado!", nome)
   senao
      escreval("Reprovado!", nome)
   fimse */
   var nome, nota01, nota02, matricula;
   nome = prompt("Digite o nome do aluno:")
   matricula = prompt("Digite a matricula do aluno:")
   nota01 = prompt("Digite a nota 1 do aluno:")
   nota02 = prompt("Digite a nota 2 do aluno:")

   media = (parseInt (nota01)+parseInt(nota02)) / 2
   
   if (media>=50)
        alert ("Aprovado!" + nome)
   else
        alert ("Reprovado!" + nome)     