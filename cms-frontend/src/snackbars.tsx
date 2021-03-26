import {Snackbar} from "@material-ui/core";
import styled from "styled-components";

export const SuccessSnackbar = styled(Snackbar)`
    .MuiSnackbarContent-root {
        background: #4EAF50;
    }    
`;

export const UnsuccessfulSnackbar = styled(Snackbar)`
    .MuiSnackbarContent-root {
        background: #f44336;
    }    
`;
