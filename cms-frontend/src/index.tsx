import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import {
    AppBar,
    CssBaseline,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";

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
}));

const Menu = () => {
    return (
        <List>
            <ListItem button onClick={() => window.location.assign('/')}>
                <ListItemIcon><SportsEsportsIcon/></ListItemIcon>
                <ListItemText primary="See all games"/>
            </ListItem>

            <ListItem button onClick={() => window.location.assign('/add-game')}>
                <ListItemIcon><AddBoxIcon/></ListItemIcon>
                <ListItemText primary="Add new game"/>
            </ListItem>

            <ListItem button onClick={() => window.location.assign('/contact')}>
                <ListItemIcon><ContactMailIcon/></ListItemIcon>
                <ListItemText primary="Contact us"/>
            </ListItem>
            <Divider/>
            <ListItem button onClick={() => window.location.assign('/admin')}>
                <ListItemIcon><SupervisedUserCircleIcon/></ListItemIcon>
                <ListItemText primary="Administration"/>
            </ListItem>
        </List>
    )
}

const Home = () => {
    return (
        <p>Hehe</p>
    )
}
const Admin = () => {
    return (
        <p>Admin</p>
    )
}
const Contact = () => {
    return (
        <p>Contact</p>
    )
}
const AddGame = () => {
    return (
        <p>Add</p>
    )
}

const CMS: FC = () => {
    const classes = useStyles()


    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Games
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar/>
                <div className={classes.drawerContainer}>
                    <Menu/>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/admin">
                            <Admin/>
                        </Route>
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                        <Route path="/add-game">
                            <AddGame/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </BrowserRouter>

            </main>
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <CMS/>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

