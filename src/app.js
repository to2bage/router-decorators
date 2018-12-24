import React from 'react';
import { Route, Switch } from "react-router-dom";

import routes from "./routes.js";
import "antd/dist/antd.css";
import "./assets/com.styl";

export default () => {
    return <Switch>
            {
                routes.map(({ name, path, exact = true, component }) => {
                    return <Route path={path} exact={exact} component={component} key={name}></Route>
                })
            }
           </Switch>
}