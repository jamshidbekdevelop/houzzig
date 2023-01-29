import React from "react";
import {
  activeStyle,
  LogoTitle,
  // MobileIcon,
  NavbarBody,
  NavbarBox,
  NavbarContainer,
  NavbarIcon,
  NavbarTitle,
  // NavbarWrapper,
  Wrapper,
} from "./styled";
// import { FaBars } from "react-icons/fa";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { navbar } from "../../untils/navbar";
// import Button from "./Generic/Button";
import Button from "../Geniric/Button";
import { useLocation } from "react-router-dom";
// import Footer from "../Footer";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const gotoSignIn = () => { 
  //   navigate("/signin");
  // };
  // const gotoSignUp = () => {
  //   navigate("/register");
  // };
  // const Profile = () => {
  //   navigate("/properties/profile");
  // };
  // const logOut = () => {
  //   localStorage.removeItem("token");
  //   if (location?.pathname?.includes("profile")) {
  //     navigate("/home");
  //   } else {
  //     navigate(location.navigate);
  //   }
  // };
  return (
    <Wrapper>
      <NavbarBody>
        <NavbarContainer>
          <NavbarBox>
            <LogoTitle onClick={() => navigate("/home")}>
              <NavbarIcon />
              <NavbarTitle>Houzing</NavbarTitle>
            </LogoTitle>
          </NavbarBox>
          <NavbarBox gap={64}>
            {navbar.map((value) => {
              return (
                !value.hidden && (
                  <NavLink style={activeStyle} key={value.id} to={value.path}>
                    {value.title}
                  </NavLink>
                )
              );
            })}
          </NavbarBox>
          <NavbarBox>
            <Button height={44} width={120}>Login</Button>
          </NavbarBox>
        </NavbarContainer>
      </NavbarBody>
      <Outlet />
      {/* <Footer/> */}
    </Wrapper>
  );
};

export default Navbar;
