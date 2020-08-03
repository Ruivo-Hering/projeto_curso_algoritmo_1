/*
   nome: caracter
   nota01,nota02, media: real
   passou: logico

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
    passou := falso
    escreval("Digite o seu Nome:")
    leia(nome)
    escreval("Digite a nota 1 do aluno:")
    leia(nota01)
    escreval("Digite a nota 2 do aluno:")
    leia(nota02)
    media = (nota01 + nota02) / 2
    //!passou negação
    //!passou && media == 0 entao conjunção
    //!passou || media >= 50 entao disjunção
    // ( passou ) && ( || media>=50)  entao disjunção exclusiva
    // (|| OU) (&& E)
    se media >= 50 entao
       passou := verdadeiro
    fimse*/
    var nome, nota01, nota02, matricula, passou;
    passou = false;

    nome = prompt("Digite o nome do aluno:")
    matricula = prompt("Digite a matricula do aluno:")
    nota01 = prompt("Digite a nota 1 do aluno:")
    nota02 = prompt("Digite a nota 2 do aluno:")
 
    media = (parseInt (nota01)+parseInt(nota02)) / 2
    
    if (media>=50)
        passou = true;
    if (passou && media>=70)
         alert ("Aprovado!" + nome)
    else
         alert ("Reprovado!" + nome)     