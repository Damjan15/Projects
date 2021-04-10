import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NavbarToggle from "./Components/NavbarToggle/NavbarToggle";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
