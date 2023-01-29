import styled from "styled-components";
import { ReactComponent as icon } from "../../assets/icons/logo.svg";

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;
export const NavbarBody = styled.div`
  width: 100%;
  height: 64px;
  background: #0d263b;
`;
export const NavbarContainer = styled.div`
  max-width: 1180px;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;
export const NavbarBox = styled.div`
  display: flex;
  width: auto;
  gap: ${({ gap }) => gap && `${gap}px`};
`;
export const NavbarIcon = styled(icon)`
  width: 30.39px;
  height: 36px;
`;
export const NavbarTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #ffffffff;
`;
export const LogoTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 11.62px;
  cursor: pointer;
  @media screen and (max-width: 770px) {
    margin-left: 30px;
  }
`;
export const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? "#00fff5" : "white",
    textDecoration: "none",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "24px",
  };
};
// export const NavbarWrapper = styled.div`
//   display: flex;
//   height: 64px;
//   max-width: 1280px;
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   width: 100%;
//   color: #ffffff;
// `;
// export const MobileIcon = styled.div`
//   display: none;
//   @media screen and (max-width: 770px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 60%);
//     font-size: 1.8rem;
//     cursor: pointer;
//     color: #fff;
//   }
// `;
// export const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   cursor: pointer;

//   @media screen and (max-width: 770px) {
//     display: none;
//   }
// `;
