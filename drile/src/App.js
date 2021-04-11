import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NavbarToggle from "./Components/NavbarToggle/NavbarToggle";
import { Contact } from "./Pages/Contact/Contact";
import { Details } from "./Pages/Details/Details";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/details/:id" component={Details} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
