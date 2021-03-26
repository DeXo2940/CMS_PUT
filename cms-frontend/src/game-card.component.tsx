import styled from "styled-components";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {useContext} from "react";
import {AdminContext} from "./admin.context";
import {Game} from "./add-game.utils";
import axios from "axios";

const StyledTypography = styled(Typography)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`;

interface GameCardProps {
    game: Game,
    onGameUpdate: () => void;
}

export const GameCard = ({
                             game: {
                                 description,
                                 id,
                                 imageLink,
                                 link,
                                 maxPlayerAmount,
                                 minPlayerAmount,
                                 name,
                                 releaseDate
                             },
                             onGameUpdate
                         }: GameCardProps) => {
    const isAdmin = useContext<boolean>(AdminContext);

    const onLinkClick = () => {
        window.location.assign(link!!);
    }

    const onEditClick = () => {

    }

    const onDeleteClick = () => {
        axios.delete(`/api/game/${id}`)
            .then(() => onGameUpdate());
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
                {isAdmin &&
                <CardActions>

                    <Button size="small" color="primary" onClick={onEditClick}>
                        Edit
                    </Button>
                    <Button size="small" color="primary" onClick={onDeleteClick}>
                        Delete
                    </Button>
                </CardActions>
                }
            </Card>
        </div>
    )
}
