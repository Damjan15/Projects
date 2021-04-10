import { useState } from "react";
import { Route, Switch } from "react-router";
import { Home } from "./Pages/Home/Home";
import { Discover } from "./Pages/Discover";
import Search from "./Pages/Search/Search";



function App() {
  const [ data, setData ] = useState([]);

  return (
    <div className="app">
      <Switch>
        <Route path="/search">
          <Search data={data}/>
        </Route>

        <Route path="/mangas/:id">
          <Discover setData={setData} />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
