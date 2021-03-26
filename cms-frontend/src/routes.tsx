import {Route, Switch} from "react-router";
import {GameManagement} from "./game-management.component";
import {GamesList} from "./games-list.component";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {EMPTY_GAME, Mode} from "./game-management.utils";
import {ContactUs} from "./contact-us.component";


export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/contact">
                    <ContactUs/>
                </Route>
                <Route path="/add-game">
                    <GameManagement initialState={EMPTY_GAME} mode={Mode.ADD}/>
                </Route>
                <Route path="/">
                    <GamesList/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
