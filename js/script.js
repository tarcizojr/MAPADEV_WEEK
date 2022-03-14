const lsitaSelecaoPokemons = document.querySelectorAll('.pokemon');

const pokemonCard = document.querySelectorAll('.cartao-pokemon')

lsitaSelecaoPokemons.forEach(pokemon =>{
pokemon.addEventListener('click', () => {
    // tirar a seleção de um pokemon apois clicar em outro
    const cartaoPokemonAberto = document.querySelector('.aberto');
    cartaoPokemonAberto.classList.remove('aberto');


    
    //verefica qual pokemon foi selecionado
    const pokemonSelecionado = pokemon.attributes.id.value;
    
    const cartaoPokemonsParaAbrir = document.getElementById('cartao-' + pokemonSelecionado)
    //ativar pokemon selecionado na lista


    cartaoPokemonsParaAbrir.classList.add('aberto')
    

    //tira a seleção da listagem quando outro pokemon é selecionado    
    const pokemonAtivoNaListagem = document.querySelector('.ativo'); 
    pokemonAtivoNaListagem.classList.remove('ativo');

    document.getElementById(pokemonSelecionado).classList.add('ativo')


    })
})