import { Route, Switch } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Cart from "./Pages/Cart";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={Details} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
