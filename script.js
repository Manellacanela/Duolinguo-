let perguntas = [
    {
        titulo: 'Gato',
        alternativas: ['Gat','Cat','Gate','Dog'],
        correta: 1
    },
    {
        titulo: 'Fire',
        alternativas: ['Fogo','Agua','Terra','Ar'],
        correta: 0
    },
    {
        titulo: 'Bird',
        alternativas: ['Gato','Urubu','Pombo','Passaro'],
        correta: 3
    }
    ]
    
    let app = {
    start: function(){
    
        this.Atualpos = 0;
        this.Totalpontos = 0;
    
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element,index)=>{
            element.addEventListener('click', ()=>{
                this.checaResposta(index);
            })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);
    },
    
    mostraquestao: function(q){
        this.qatual = q;
        // mostrando o titulo
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
        // mostrando as alternativas
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function(element,index){
            element.textContent = q.alternativas[index];
        })
    
    },
    
    Proximaperg: function(){
        this.Atualpos++;
        if(this.Atualpos == perguntas.length){
            this.Atualpos = 0;
        }
    },
    
    checaResposta: function(user){
        if(this.qatual.correta == user){
            console.log("Correta")
            this.Totalpontos++;
            this.mostraresposta(true);
        }
        else{
            console.log("Errada")
            this.mostraresposta(false);
        }
        this.atualizaPontos();
        this.Proximaperg();
        this.mostraquestao(perguntas[this.Atualpos]);
    },
    
    atualizaPontos: function(){
        let scoreDiv = document.getElementById('pontos');
        scoreDiv.textContent = `Sua pontuacao: ${this.Totalpontos}`;
    },
    
    mostraresposta: function (correto) {
        let resultDiv = document.getElementById('result');
        let result = '';
        // formate a mensagem a ser exibida
        if (correto) {
          result = 'Resposta Correta!';
        }
        else {
          // obtenha a quest??o atual
          let pergunta = perguntas[this.Atualpos];
          // obtenha o ??ndice da resposta correta da quest??o atual
          let cindice = pergunta.correta;
          // obtenha o texto da resposta correta da quest??o atual
          let ctexto = pergunta.alternativas[cindice];
          result = `Incorreto! Resposta Correta: ${ctexto}`;
        }
        resultDiv.textContent = result;
      }
    
    
    }
    
    app.start();





//O DOM conecta a p??gina web  ao nosso c??digo JavaScript . Dentro do script.js , usamos M??todos DOM.
//Trabalhar com o DOM a partir do JavaScript temos um processo de duas etapas. Primeiro, selecionamos o elemento DOM e depois o modificamos.
//No nosso caso, o t??tulo da pergunta ?? armazenada no objeto da pergunta sob uma propriedade String chamada titulo. 
//No HTML, representamos a palavra da pergunta como um <div> com um id titulo. Dentro da fun????o mostraquestao, adicionaremos l??gica para selecionar e modificar este elemento DOM.

//pergunta no html sera div
//document = html
//q = referencia direta a pergunta que ta fazendo (q.titulo)
// alts recebe todos os objetos do html que recebem a classe alternativa
//referencia a classe precisa ter um ponto inicial (.alternativa)
//?? possivel colocar um ouvinte de eventos em texto