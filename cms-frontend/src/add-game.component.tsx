import {TextField} from "@material-ui/core";
import {useState} from "react";
import axios from "axios";
import {Container, EMPTY_GAME, Form, Game, StyledButton} from "./add-game.utils";

export const AddGame = () => {
    const [formData, setFormData] = useState<Game>(EMPTY_GAME);

    const onClick = () => {
        // todo add validation
        axios.post('/api/game', formData);
    }

    return (
        <Container>
            <Form>
                <TextField
                    id="standard-full-width"
                    label="Game name"
                    variant="outlined"
                    required
                    value={formData.name}
                    onChange={(ev) => setFormData({...formData, name: ev.target.value})}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="standard-multiline-static"
                    variant="outlined"
                    label="Description"
                    value={formData.description}
                    onChange={(ev) => setFormData({...formData, description: ev.target.value})}
                    multiline
                    required
                    rows={4}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField /* todo change textfield to year picker */
                    id="date"
                    label="Release date"
                    value={formData.releaseDate}
                    onChange={(ev) => setFormData({...formData, releaseDate: parseInt(ev.target.value)})}
                    variant="outlined"
                    required
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="standard-full-width"
                    label="Image link"
                    value={formData.imageLink}
                    onChange={(ev) => setFormData({...formData, imageLink: ev.target.value})}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="standard-full-width"
                    label="Page link"
                    value={formData.link}
                    onChange={(ev) => setFormData({...formData, link: ev.target.value})}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="standard-full-width"
                    label="Max players amount"
                    value={formData.maxPlayerAmount}
                    onChange={(ev) => setFormData({...formData, maxPlayerAmount: parseInt(ev.target.value)})}
                    type="number"
                    variant="outlined"
                    defaultValue={1}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="standard-full-width"
                    label="Min players amount"
                    value={formData.minPlayerAmount}
                    onChange={(ev) => setFormData({...formData, minPlayerAmount: parseInt(ev.target.value)})}
                    type="number"
                    variant="outlined"
                    defaultValue={1}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Form>
            <StyledButton variant="contained" color="primary" size="medium" onClick={onClick}>
                Add game
            </StyledButton>
        </Container>
    )
};
