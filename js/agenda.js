//criando array
var listaContatos = []

//variavel de escolha do menu
var escolha

//interação com o menu inicial
function escolhaMenu(){
    //console.log(document.getElementById('opcao').value) debug
    escolha = document.getElementById('opcao').value
    
    //lógica de opcao do menu
    switch(escolha){
        case '1':
            adicionar.style.display ='block'
            break
        case '2':
            consultar.style.display ='block'
            break
        case '3':
            remover.style.display = 'block'
            break
        case '4':
            alterar.style.display = 'block'
            break
        default:
            alert('Comando inválido!')
    }
}
    