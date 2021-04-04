import { useHistory } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import axios from "axios";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavbarForm,
  NavbarInput,
  NavbarItem,
  NavbarLink,
  NavbarLogo,
  NavbarMenu,
} from "./navbar.styles.js";


const Navbar = ({ setData, toggle }) => {
  const [ input, setInput ] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    axios.request(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${input}`).then(res => setData(res.data));
    
    history.push("/search");
    setInput("");
  }


  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarLogo to="/">
            <img src={Logo} alt="" />
          </NavbarLogo>
          <MobileIcon onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"/></svg>
          </MobileIcon>

          <NavbarMenu>
            <NavbarItem>
              <NavbarLink to="/">Home</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to="/movies">Movies</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to="/shows">TV Shows</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to="/popular">Popular</NavbarLink>
            </NavbarItem>
          </NavbarMenu>

          <NavbarForm>
                <NavbarInput placeholder="Search" value={input || ""} onChange={(e) => setInput(e.target.value)} />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"/></svg>
                <button onClick={search}></button>
          </NavbarForm>

        </NavbarContainer>
      </Nav>
    </>
  );
};
export default Navbar;
