import React from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './Pages/Home';
import Navbar from "./Components/Navbar/Navbar";
import NavbarToggle from './Components/NavbarToggle/NavbarToggle';
import { Movies } from './Pages/Movies';
import { Shows } from './Pages/Shows';
import { Details } from './Pages/Details/Details';
import { Search } from './Pages/Search';
import { Popular } from './Pages/Popular';

function App() {
  return (
    <>
      <Navbar />
      <NavbarToggle />
      <Switch>
        <Route path="/details/:id" component={Details} />
        <Route path="/popular" component={Popular} />
        <Route path="/search" component={Search} />
        <Route path="/shows" component={Shows} />
        <Route path="/movies" component={Movies} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
