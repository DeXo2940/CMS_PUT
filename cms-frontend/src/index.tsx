import React, {FC, useState} from 'react';
import ReactDOM from 'react-dom';
import {
    AppBar,
    CssBaseline,
    Drawer,
    FormControlLabel,
    makeStyles,
    Switch,
    Toolbar,
    Typography
} from "@material-ui/core";
import {Routes} from "./routes";
import styled from "styled-components";
import {Menu} from "./menu.component";
import {AdminContext} from "./admin.context";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    })
);

const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`;


const CMS: FC = () => {
    const classes = useStyles()
    const [adminMode, setAdminMode] = useState(false);

    return (
        <AdminContext.Provider value={adminMode}>
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <StyledToolbar>
                        <Typography variant="h6" noWrap>
                            Games
                        </Typography>
                        <div>
                            <FormControlLabel
                                value="start"
                                control={<Switch
                                    checked={adminMode}
                                    onChange={() => setAdminMode(!adminMode)}
                                    inputProps={{'aria-label': 'secondary checkbox'}}
                                />}
                                label="Administration mode"
                                labelPlacement="start"/>
                        </div>
                    </StyledToolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}>
                    <Toolbar/>
                    <div className={classes.drawerContainer}>
                        <Menu/>
                    </div>
                </Drawer>
                <main className={classes.content}>
                    <Toolbar/>
                    <Routes/>
                </main>
            </div>
        </AdminContext.Provider>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <CMS/>
    </React.StrictMode>, document.getElementById('root')
);
