import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Icon, NavbarBtn, NavbarToggleContainer, NavbarToggleForm, NavbarToggleInput, NavbarToggleLink, NavbarToggleMenu, NavbarToggleWrapper } from "./navbartoggle.styles";

const NavbarToggle = ({ setData, isOpen, toggle }) => {
  const [ input, setInput ] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    axios.request(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${input}`).then(res => setData(res.data));
    
    history.push("/search");
    setInput("");
  }


  return (
    <NavbarToggleContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/></svg>
      </Icon>

      <NavbarToggleWrapper>
        <NavbarToggleMenu>
          <NavbarToggleLink to="/" onClick={toggle}>Home</NavbarToggleLink>
          <NavbarToggleLink to="/movies" onClick={toggle}>Movies</NavbarToggleLink>
          <NavbarToggleLink to="/shows" onClick={toggle}>TV Shows</NavbarToggleLink>
          <NavbarToggleLink to="/popular" onClick={toggle}>Popular</NavbarToggleLink>
        </NavbarToggleMenu>

        <NavbarToggleForm>
          <NavbarToggleInput value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search" />
          <NavbarBtn onClick={search}>Search</NavbarBtn>
        </NavbarToggleForm>

      </NavbarToggleWrapper>
    </NavbarToggleContainer>
  );
};

export default NavbarToggle;
