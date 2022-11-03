import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import NavBar from "../components/NavBar";
import Badge from '../components/Badge';
import { CardPokemonProps } from '../components/CardPokemon';
import api from '../services/api';
import { StoreState } from '../redux';
import { add, remove } from '../redux/favoriteSlice';
import { Container, Image, Card, Number, Title, Button } from "./Details.style";

function Details() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const listaPokemonsFavoritos = useSelector((state: StoreState) => state.favorite);
    const [isLoading, setIsLoading] = useState(true);
    const[pokemonData, setPokmonData] = useState<CardPokemonProps>({} as CardPokemonProps);

    function handleClickAdd() {
        dispatch(add(id));
    }

    function handleClickRemove() {
        dispatch(remove(id));
    }

    async function getPokemonData() {
        const { data } = await api.get("/pokemon/" + id);
        setPokmonData({
            id: data.id,
            name: data.name,
            types: data.types,
            });
            setIsLoading(false);
        }

        useEffect(() => {
            getPokemonData()
        }, []);

        if (isLoading) {
            return <p>Carregando</p>;
        }

    return (
        <>
            <NavBar hasGoBack />

            <Container>
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={pokemonData.name} />
                <Card className={`type--${pokemonData.types[0].type.name.toLocaleLowerCase()}`}>
                    <Number>#{String(id).toString().padStart(3, "0")} </Number>
                    <Title>{pokemonData.name}</Title>

                    {pokemonData.types.map((item, index) => {
                        return <Badge key={index} name={item.type.name} />
                        })}

                    {!!listaPokemonsFavoritos.find((pokemon) => String(pokemon) === String(id)
                    )? (
                        <Button onClick={handleClickRemove}>Remover dos favoritos</Button> )
                    : (
                        <Button onClick={handleClickAdd}>Adicionar aos favoritos</Button> 
                    )}      
                </Card>
            </Container>            
        </>
    )
}

export default Details;