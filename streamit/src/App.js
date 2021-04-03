import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './Pages/Home';
import Navbar from "./Components/Navbar/Navbar";
import NavbarToggle from './Components/NavbarToggle/NavbarToggle';
import { Movies } from './Pages/Movies';
import { Shows } from './Pages/Shows';
import { Details } from './Pages/Details/Details';
import { Search } from './Pages/Search';
import { Popular } from './Pages/Popular';
import Footer from './Components/Footer/Footer';

function App() {
  const [ data, setData ] = useState([]);

  return (
    <>
      <Navbar data={data} setData={setData} />
      <NavbarToggle />
      <Switch>
        <Route path="/details/:id" component={Details} />
        <Route path="/popular" component={Popular} />

        <Route path="/search">
          <Search data={data} />
        </Route>
        
        <Route path="/shows" component={Shows} />
        <Route path="/movies" component={Movies} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
