import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ApolloConnectedProvider from "./config";
import { CountryPediaRouter } from "./country-pedia/CountryPediaRouter";
import { ModuleRoute } from "./module-routes";

const App: React.FC = () => {
  return (
    <>
      <ApolloConnectedProvider>
        <BrowserRouter>
          <Switch>
            <Route
              path={ModuleRoute.CountryPedia}
              component={CountryPediaRouter}
            />
            {/* other modules */}
          </Switch>
        </BrowserRouter>
      </ApolloConnectedProvider>
    </>
  );
};

export default App;
