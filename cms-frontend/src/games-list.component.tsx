import styled from "styled-components";
import {GameCard} from "./game-card.component";
import {Game} from "./add-game.utils";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    .MuiCard-root {
        width: 30rem;
    }
`;

export const GamesList = () => {
    const [games, setGames] = useState<Game[]>([]);

    const onGameUpdate = () => {
        axios.get('/api/game')
            .then((response: AxiosResponse<Game[]>) => {
                response.data && setGames(response.data);
            })
            .catch((error) => {
            });
    }

    useEffect(() => {
        onGameUpdate();
    }, []);

    return (
        <Container>
            {games.map(game => <GameCard onGameUpdate={onGameUpdate} game={{...game}} key={game.name}/>)}
        </Container>
    )
}
