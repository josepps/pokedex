import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Badge from '../components/Badge';
import { CardPokemonProps } from '../components/CardPokemon';
import api from '../services/api';
import { Container, Image, Card, Number, Title } from "./Details.style";

function Details() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const[pokemonData, setPokmonData] = useState<CardPokemonProps>({} as CardPokemonProps);

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
                </Card>
            </Container>            
        </>
    )
}

export default Details;