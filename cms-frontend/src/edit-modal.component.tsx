import {Game, Mode} from "./game-management.utils";
import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import {GameManagement} from "./game-management.component";
import styled from "styled-components";
import CloseIcon from '@material-ui/icons/Close';

interface EditModalProps {
    game: Game,
    onClose: () => void
    onSave?: () => void
}

const Title = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CustomCloseIcon = styled(CloseIcon)`
    &:hover {
        cursor: pointer;
    }
`

export const EditModal = ({game, onClose, onSave}: EditModalProps) => {

    return (
        <Dialog
            open={true}
            keepMounted
            onClose={onClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">
                <Title>
                    <span>Edit game</span>
                    <CustomCloseIcon onClick={onClose}/>
                </Title>
            </DialogTitle>
            <DialogContent>
                <GameManagement initialState={game} mode={Mode.EDIT} onSave={onSave} onClose={onClose}/>
            </DialogContent>
        </Dialog>
    )
}
