import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import React, {useContext} from "react";
import {AdminContext} from "./admin.context";

export const Menu = () => {
    const isAdmin = useContext<boolean>(AdminContext);

    const gameLabel = isAdmin ? "Manage games" : "See all games";
    return (
        <List>
            <ListItem button onClick={() => window.location.assign('/')}>
                <ListItemIcon><SportsEsportsIcon/></ListItemIcon>
                <ListItemText primary={gameLabel}/>
            </ListItem>
            {isAdmin &&
            <ListItem button onClick={() => window.location.assign('/add-game')}>
                <ListItemIcon><AddBoxIcon/></ListItemIcon>
                <ListItemText primary="Add new game"/>
            </ListItem>
            }
            <ListItem button onClick={() => window.location.assign('/contact')}>
                <ListItemIcon><ContactMailIcon/></ListItemIcon>
                <ListItemText primary="Contact us"/>
            </ListItem>
        </List>
    )
}
