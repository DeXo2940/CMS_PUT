import {Button, TextField} from "@material-ui/core";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 30rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledButton = styled(Button)`
    width: 10rem;
    margin-top: 1.5rem;
`;

export const AddGame = () => {
    return (
        <Container>
            <Form>
                <TextField
                    id="standard-full-width"
                    label="Game name"
                    variant="outlined"
                    required
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="standard-multiline-static"
                    variant="outlined"
                    label="Description"
                    multiline
                    required
                    rows={4}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="date"
                    label="Release date"
                    variant="outlined"
                    required
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="standard-full-width"
                    label="Image link"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="standard-full-width"
                    label="Page link"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="standard-full-width"
                    label="Max players amount"
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
                    type="number"
                    variant="outlined"
                    defaultValue={1}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Form>
            <StyledButton variant="contained" color="primary" size="medium">
                Add game
            </StyledButton>
        </Container>
    )
};
