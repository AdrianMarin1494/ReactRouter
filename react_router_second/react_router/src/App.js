import {Route, Switch, Redirect} from "react-router-dom";

import AllQuotes from "./components/pages/AllQuotes";
import QuoteDetail from "./components/pages/SingleQuote";
import NewQuote from "./components/pages/NewQuote";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Switch>
    </div>
  );
}

export default App;