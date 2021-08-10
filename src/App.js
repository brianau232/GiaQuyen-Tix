import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import PageLoading from "./components/PageLoading/index";
import React, { Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import GuardAdmin from "./HOC/GuardAdmin";

const Home = React.lazy(() => import("./Home-template/features/home"));
const DashBoard = React.lazy(() => import("./Admin-template/Page/DashBoard"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<PageLoading />}>
        <BrowserRouter>
          <ScrollToTop />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} />
            <GuardAdmin>
              <Route exact path="/dashboard" component={DashBoard} />
            </GuardAdmin>
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
