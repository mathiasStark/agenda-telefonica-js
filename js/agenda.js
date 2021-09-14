//criando array
var listaContatos = []

//variavel de escolha do menu
var escolha

//interação com o menu inicial
function escolhaMenu(){
    //console.log(document.getElementById('opcao').value) debug
    escolha = document.getElementById('opcao').value
    
    //lógica de opcao do menu
    if(escolha === '1'){
        adicionar.style.display ='block'
    }
}