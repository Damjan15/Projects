import { Route, Switch } from "react-router";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
