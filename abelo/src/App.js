import { Route, Switch } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
