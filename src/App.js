import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import GlobalStyles from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news/:id">
            <News />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
