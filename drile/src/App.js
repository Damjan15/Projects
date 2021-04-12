import { Provider } from "react-redux";
import store from "./store";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NavbarToggle from "./Components/NavbarToggle/NavbarToggle";
import { Cart } from "./Pages/Cart/Cart";
import { Contact } from "./Pages/Contact/Contact";
import { Details } from "./Pages/Details/Details";
import { Home } from "./Pages/Home";

function App() {
  return (
    <Provider store={store}>
      <Navbar />

      <Switch>
        <Route path="/details/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Provider>
  );
}

export default App;
