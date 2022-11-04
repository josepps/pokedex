import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../services/api";
import { StoreState } from "../redux";
import NavBar from "../components/NavBar";
import  Title  from '../components/Title';
import CardPokemon, { CardPokemonProps } from "../components/CardPokemon";
import { List } from "../components/List.style";

function Favorite() {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState<CardPokemonProps[]>([]);
    const listaPokemonsFavoritos = useSelector((state: StoreState) => state.favorite);

    async function getPokemonData() {
        const dadosCompletos = await Promise.all(
        listaPokemonsFavoritos.map(async (pokemonId) => {
            const { data } = await api.get("/pokemon/"+pokemonId);

            return {
                id: data.id,
                name: data.name,
                types: data.types,
                };
        })
        );
        
        setPokemonList(dadosCompletos);
        setIsLoading(false);
    }

    useEffect(() => {
        getPokemonData();
    }, []);

    if (isLoading) {
        return <p>Carregando</p>;
    }

    return (
        <>
            <NavBar />
            <Title text="Seus pokémons favoritos" />

            <List>
                {pokemonList.map((pokemon, index) => {
                return (
                    <CardPokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} types={pokemon.types} />
                )
            })}
            </List>
        </>
    );
}

export default Favorite;