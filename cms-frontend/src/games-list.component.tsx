import {Game} from "./add-game.component";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import styled from "styled-components";

interface Props {
    game: Game
}

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
width: 40rem;`

const GameCard = ({
                      game: {
                          description,
                          imageLink,
                          link,
                          maxPlayerAmount,
                          minPlayerAmount,
                          name,
                          releaseDate
                      }
                  }: Props) => {

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="280"
                    image={imageLink}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>

                </CardContent>
            </CardActionArea>
            
            <CardActions>
                <Button size="small" color="primary">
                    Edit
                </Button>
                <Button size="small" color="primary">
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}


export const GamesList = () => {

    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        axios.get('/api/game')
            .then((response: AxiosResponse<Game[]>) => {
                response.data && setGames(response.data);
            })
            .catch((error) => {

            });
    }, []);

    return (
        <Container>
            {games.map(game => <GameCard game={game} key={game.name}/>)}
        </Container>
    )
}
