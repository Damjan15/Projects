import { Route, Switch } from "react-router";
import { Home } from "./Pages/Home/Home";
import { Discover } from "./Pages/Discover";
import { Action } from "./Pages/Action";
import { Comedy } from "./Pages/Comedy";
import { SchoolLife } from "./Pages/SchoolLife";
import { Romance } from "./Pages/Romance";
import { MartialArts } from "./Pages/MartialArts";
import { Horror } from "./Pages/Horror";
import { Historical } from "./Pages/Historical";
import { Fantasy } from "./Pages/Fantasy";
import { Drama } from "./Pages/Drama";
import { Mystery } from "./Pages/Mystery";
import { Adventure } from "./Pages/Adventure";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/schoollife" component={SchoolLife} />
        <Route path="/romance" component={Romance} />
        <Route path="/martialarts" component={MartialArts} />
        <Route path="/horror" component={Horror} />
        <Route path="/historical" component={Historical} />
        <Route path="/fantasy" component={Fantasy} />
        <Route path="/drama" component={Drama} />
        <Route path="/mystery" component={Mystery} />
        <Route path="/comedy" component={Comedy} />
        <Route path="/adventure" component={Adventure} />
        <Route path="/action" component={Action} />
        <Route path="/discover" component={Discover} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
