
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