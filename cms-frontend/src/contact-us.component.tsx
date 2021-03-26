import {Container, Form} from "./game-management.utils";
import {Button, TextField} from "@material-ui/core";
import {useState} from "react";
import axios from "axios";
import {SuccessSnackbar} from "./snackbars";

interface Mail {
    customerMail: string,
    mailTopic: string,
    message: string
}

const EMPTY_MAIL = {
    customerMail: "",
    mailTopic: "",
    message: ""
}


export const ContactUs = () => {
    const [mail, setMail] = useState<Mail>(EMPTY_MAIL);
    const [snackbar, setSnackbar] = useState(false);

    const onSend = () => {
        axios.post('/api/mail/send', mail)
            .then(() => {
                setSnackbar(true);
                setMail(EMPTY_MAIL);
            });
    }

    return (
        <>
            <Container>
                <Form>
                    <TextField
                        id="standard-full-width"
                        label="Your e-mail"
                        variant="outlined"
                        required
                        value={mail.customerMail}
                        onChange={(ev) => setMail({...mail, customerMail: ev.target.value})}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="standard-full-width"
                        label="Topic"
                        variant="outlined"
                        required
                        value={mail.mailTopic}
                        onChange={(ev) => setMail({...mail, mailTopic: ev.target.value})}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="standard-multiline-static"
                        variant="outlined"
                        label="Message"
                        value={mail.message}
                        onChange={(ev) => setMail({...mail, message: ev.target.value})}
                        multiline
                        required
                        rows={7}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <Button size="small" variant={"contained"} color="primary" onClick={onSend}>
                        Send
                    </Button>
                </Form>
            </Container>
            <SuccessSnackbar
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                open={snackbar}
                autoHideDuration={3000}
                onClose={() => setSnackbar(false)}
                message="Mail was sent successfully"
            />
        </>
    )
}
