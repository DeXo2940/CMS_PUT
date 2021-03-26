import styled from "styled-components";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {useContext, useState} from "react";
import {AdminContext} from "./admin.context";
import {Game} from "./game-management.utils";
import axios from "axios";
import {EditModal} from "./edit-modal.component";

const StyledTypography = styled(Typography)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`;

interface GameCardProps {
    game: Game,
    onGameUpdate: () => void;
}

export const GameCard = (props: GameCardProps) => {
    const isAdmin = useContext<boolean>(AdminContext);

    const [showModal, setShowModal] = useState(false);

    const onLinkClick = () => {
        window.location.assign((props.game.link)!!);
    }

    const onEditClick = () => {
        setShowModal(true);
    }

    const onDeleteClick = () => {
        axios.delete(`/api/game/${(props.game.id)}`)
            .then(() => props.onGameUpdate());
    }

    const onSave = () => {
        props.onGameUpdate();
        setShowModal(false);
    }

    return (
        <div>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="280"
                        image={props.game.imageLink}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                            {props.game.name}
                        </Typography>
                        <StyledTypography variant="body2" color="textSecondary">
                            <div>{`Released: ${(props.game.releaseDate)}`}</div>
                            <div>{`Players: ${(props.game.minPlayerAmount)} - ${(props.game.maxPlayerAmount)}`}</div>
                        </StyledTypography>
                        <StyledTypography variant="body2" color="textSecondary">
                            {props.game.description}
                        </StyledTypography>
                        {props.game.link &&
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
            {showModal && <EditModal game={props.game} onSave={onSave} onClose={() => setShowModal(false)}/>}
        </div>
    )
}
