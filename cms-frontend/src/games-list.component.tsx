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
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    .MuiCard-root {
        width: 30rem;
    }
`;

const StyledTypography = styled(Typography)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`

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

    const onLinkClick = () => {
        window.location.assign(link!!);
    }

    return (
        <div>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="280"
                        image={imageLink}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                            {name}
                        </Typography>
                        <StyledTypography variant="body2" color="textSecondary">
                            <div>{`Released: ${releaseDate}`}</div>
                            <div>{`Players: ${minPlayerAmount} - ${maxPlayerAmount}`}</div>
                        </StyledTypography>
                        <StyledTypography variant="body2" color="textSecondary">
                            {description}
                        </StyledTypography>
                        {link &&
                        <Button size="medium" onClick={onLinkClick} color="primary">
                            READ MORE
                        </Button>
                        }
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
        </div>
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
