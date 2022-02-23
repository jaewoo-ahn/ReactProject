import React, {Suspense} from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";

import QuotesDetail from "./pages/QuotesDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));

function App() {
  return (
    <Layout>
      <Suspense>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuotesDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
