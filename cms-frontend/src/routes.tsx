import {Route, Switch} from "react-router";
import {AddGame} from "./add-game.component";
import {GamesList} from "./games-list.component";
import {BrowserRouter} from "react-router-dom";
import React from "react";

const Contact = () => {
    return (
        <p>Contact</p>
    )
}

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="/add-game">
                    <AddGame/>
                </Route>
                <Route path="/">
                    <GamesList/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
