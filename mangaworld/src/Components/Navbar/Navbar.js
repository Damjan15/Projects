import { useState } from "react";
import { BsBook } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { Drawer } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import "./navbar.css";
import axios from "axios";

const Navbar = ({ setData }) => {
  const [toggle, setToggle] = useState(false);
  const [term, setTerm] = useState("");
  const history = useHistory();

  const options = {
    url: "https://jikan1.p.rapidapi.com/search/manga",
    params: { q: `${term}` },
    headers: {
      "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
    },
  };

  const search = (e) => {
    e.preventDefault();
    history.push("/search");

    axios.request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        alert(error);
      });

    setTerm("");
  };


  return (
    <div className="navbar">
      <Link to="/" className="navbar__logo">
        <BsBook />
      </Link>

      <div className="navbar__menu">
        <BiMenuAltRight onClick={() => setToggle(!toggle)} />

        <Drawer anchor="left" open={toggle} onClose={() => setToggle(!toggle)}>
          <div className="navbar__container">
            <Link to="/" onClick={() => setToggle(!toggle)}>
              Home
            </Link>
            <Link to="/mangas/1" onClick={() => setToggle(!toggle)}>
              Action
            </Link>
            <Link to="/mangas/2" onClick={() => setToggle(!toggle)}>
              Adventure
            </Link>
            <Link to="/mangas/4" onClick={() => setToggle(!toggle)}>
              Comedy
            </Link>
            <Link to="/mangas/7" onClick={() => setToggle(!toggle)}>
              Mystery
            </Link>
            <Link to="/mangas/8" onClick={() => setToggle(!toggle)}>
              Drama
            </Link>
            <Link to="/mangas/10" onClick={() => setToggle(!toggle)}>
              Fantasy
            </Link>
            <Link to="/mangas/13" onClick={() => setToggle(!toggle)}>
              Historical
            </Link>
            <Link to="/mangas/14" onClick={() => setToggle(!toggle)}>
              Horror
            </Link>
            <Link to="/mangas/22" onClick={() => setToggle(!toggle)}>
              Romance
            </Link>
            <Link to="/mangas/23" onClick={() => setToggle(!toggle)}>
              School Life
            </Link>
          </div>

          <form className="navbar__search">
            <input
              type="text"
              placeholder="Search Manga"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <button onClick={search}></button>
          </form>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
