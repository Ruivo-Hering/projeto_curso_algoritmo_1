      function acaoBotao(params){
        var nome, idade, limite, contador
        limite = prompt ("Digite a quantidade de vezes que será verificado a idade: ")
        contador = 0
        while(contador<limite){
            nome = prompt ("Digite o nome da pessoa:  ")
            idade = prompt ("Digite a idade de  " + nome )
            if (idade > 18 )
            document.getElementById("paragrafo").innerText = nome +  " você é maior de idade!"
          else
            document.getElementById("paragrafo").innerText = nome +  " você é MENOR de idade!"
          contador++   
      }

  
}