import {Switch, Route} from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuotesDetail from "./pages/QuotesDetail";

function App() {
  return (
    <Switch>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuotesDetail />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
