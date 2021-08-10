import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import PageNotFound from "./../../../components/PageNotFound/index";
import MainPage from "./Pages/MainPage";

const LogIn = React.lazy(() => import("../login"));
const Register = React.lazy(() => import("../register"));
const Detail = React.lazy(() => import("../detailMovie"));
const Booking = React.lazy(() => import("../booking"));
const ProfileUser = React.lazy(() => import("../profile/page/MainPage"));

function HomePage() {
  const match = useRouteMatch();

  return (
    <div className="homePage element__fadeIn">
      <Switch>
        <Route exact path={`${match.url}/profile`} component={ProfileUser} />
        <Route
          exact
          path={`${match.url}/booking/:showTimeId`}
          component={Booking}
        />
        <Route exact path={`${match.url}/detail/:movieId`} component={Detail} />
        <Route exact path={`${match.url}/log-in`} component={LogIn} />
        <Route exact path={`${match.url}/register`} component={Register} />
        <Route exact path={match.url} component={MainPage} />
        <Route exact component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default HomePage;
