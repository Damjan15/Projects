import React from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './Pages/Home';
import Navbar from "./Components/Navbar/Navbar";
import NavbarToggle from './Components/NavbarToggle/NavbarToggle';

function App() {
  return (
    <>
      <Navbar />
      <NavbarToggle />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
