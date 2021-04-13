import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NavbarToggle from "./Components/NavbarToggle/NavbarToggle";
import { Cart } from "./Pages/Cart/Cart";
import { Contact } from "./Pages/Contact/Contact";
import { Details } from "./Pages/Details/Details";
import { Home } from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
