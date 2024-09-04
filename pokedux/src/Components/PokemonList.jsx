import {PokemonCard} from './PokemonCard';

const PokemonList = ({ pokemons = Array(10).fill('') }) => {
    return (
    <div className='PokemonList'>
        {pokemons.map((pokemon) => {
        return <PokemonCard 
        name={pokemon.name} 
        key={pokemon.name} 
        image={pokemon.sprites.front_default}
        abilities={pokemon.abilities}
        />;
        })}
    </div>
    );
};

export default PokemonList;