import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CountryPediaProvider } from "./context";
import { COUNTRY_PEDIA_MODULE_ROUTES as Pages } from "./routes";

const Home = lazy(() => import("./pages/Home/Home"));
const Detail = lazy(() => import("./pages/Home/Detail/Detail"));

export const CountryPediaRoutes: React.FC = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path={Pages.Init}>
          <Home />
        </Route>
        <Route path={Pages.Detail}>
          <Detail />
        </Route>
        <Redirect from="*" to={Pages.Init} />
      </Switch>
    </Suspense>
  );
};

export const CountryPediaRouter: React.FC = () => (
  <CountryPediaProvider>
    <CountryPediaRoutes />
  </CountryPediaProvider>
);
