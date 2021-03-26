import styled, {css} from "styled-components";
import {Button} from "@material-ui/core";

const flexBox = css`
    display: flex;
    flex-direction: column;
`;

export const Form = styled.form`
    ${flexBox}
    gap: 1rem;
    width: 30rem;
`;

export const Container = styled.div`
    ${flexBox}
`;

export const StyledButton = styled(Button)`
    width: 10rem;
    margin-top: 1.5rem;
`;

export interface Game {
    id: string,
    releaseDate: number
    name: string,
    description: string,
    minPlayerAmount?: number,
    maxPlayerAmount?: number,
    link?: string,
    imageLink?: string
}

export const EMPTY_GAME = {
    id: "",
    releaseDate: 0,
    name: "",
    description: "",
    minPlayerAmount: 1,
    maxPlayerAmount: 1
}

export enum Mode {
    EDIT, ADD
}

export interface GameManagementProps {
    initialState: Game,
    mode: Mode,
    onSave?: () => void,
    onClose?: () => void
}
