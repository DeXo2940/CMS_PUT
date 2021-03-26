import {TextField} from "@material-ui/core";
import {useEffect, useState} from "react";
import axios from "axios";
import {Container, EMPTY_GAME, Form, Game, GameManagementProps, Mode, StyledButton} from "./game-management.utils";
import {SuccessSnackbar, UnsuccessfulSnackbar} from "./snackbars";

enum Snackbar {
    SUCCESS,
    FAILURE
}

export const GameManagement = ({initialState, mode, onSave}: GameManagementProps) => {
    const [formData, setFormData] = useState<Game>(initialState);
    const [snackbar, setSnackbar] = useState(false);
    const [snackbarType, setSnackbarType] = useState<Snackbar>(Snackbar.SUCCESS);

    const showSnackbar = (info: Snackbar) => {
        setSnackbar(true);
        setSnackbarType(info)
    }

    const onClick = () => {
        // todo add validation
        if (mode === Mode.ADD) {
            axios.post('/api/game', formData).then(() => {
                setFormData(EMPTY_GAME);
                showSnackbar(Snackbar.SUCCESS)
                onSave && onSave();
                setFormData(EMPTY_GAME);
                showSnackbar(Snackbar.SUCCESS)
            })
                .catch(() => {
                    showSnackbar(Snackbar.FAILURE);
                });
        } else {
            axios.patch('/api/game', formData).then(() => {
                showSnackbar(Snackbar.SUCCESS)
                onSave && onSave();
            })
                .catch(() => {
                    showSnackbar(Snackbar.FAILURE)
                });
        }
    }

    useEffect(() => {
        setSnackbar(false);
    }, [formData])

    const resolveSnackbar = () => {
        if (snackbarType === Snackbar.SUCCESS) {
            return <SuccessSnackbar
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                open={snackbar}
                autoHideDuration={3000}
                onClose={() => setSnackbar(false)}
                message="Operation performed successfully"
            />
        } else {
            return <UnsuccessfulSnackbar
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                open={snackbar}
                autoHideDuration={3000}
                onClose={() => setSnackbar(false)}
                message="Operation went wrong, check your input"
            />
        }
    }

    return (
        <>
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
                    {mode === Mode.ADD ? "Add game" : "Save update"}
                </StyledButton>
            </Container>

            {snackbar && resolveSnackbar()}
        </>
    )
};
