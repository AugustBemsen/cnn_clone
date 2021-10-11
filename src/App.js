import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import GlobalStyles from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyles />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
