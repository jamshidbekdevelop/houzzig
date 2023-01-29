import styled from "styled-components";
import { Carousel } from "antd";
import { ReactComponent as arrow } from "../../assets/icons/left-arrow.svg";
import { ReactComponent as bed } from "../../assets/icons/beds.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garge } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler2.svg";

export const CaruselWrapper = styled.div`
  /* background-color: black; */
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  /* position: relative; */
`;
export const CarouselSliders = styled.div`
  z-index: 999;
  position: absolute;
  display: flex;
  max-width: 1480px;
  width: 100%;
  height: fit-content;
  padding: 0px 30px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;
export const CarouselButton = styled.button`
  position: relative;
  width: 45px;
  height: 45px;
  background-color: wheat;
  opacity: 0.2;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Left = styled(arrow)`
  & path {
    fill: #0d263b;
  }
`;
export const Right = styled(arrow)`
  & path {
    fill: #0d263b;
  }
  transform: rotate(180deg);
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  /* @media (max-width: 700px) {
    font-size: ${({ size }) => (size ? `${size}px` : "30px")};
  } */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: ${({ size }) => (size ? `${size}px` : "44px")};
  line-height: 48px;
  letter-spacing: ${({ big }) => big && "-0.02em"};
  color: #ffffff;
`;

export const Main = styled.div`
  margin: 24px 0;
  display: flex;
  gap: 24px;
  height: 47px;
  width: 337;
  justify-content: space-between;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 47px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
export const Bed = styled(bed)`
  width: 19px;
  height: 13.6px;
  path {
    fill: #ffffff;
  }
`;
export const Bath = styled(bath)`
  width: 18.52px;
  height: 19px;
  path {
    fill: #ffffff;
  }
`;
export const Garge = styled(garge)`
  width: 19px;
  height: 14.7px;
  path {
    fill: #ffffff;
  }
`;
export const SqFt = styled(ruler)`
  width: 17px;
  height: 17px;
  path {
    fill: #ffffff;
  }
`;

export const CarouselsBox = styled.div`
  max-width: 1920px;
  width: 100%;
  height: fit-content fit-content;
`;

export const MainCarusel = styled(Carousel)`
  background-color: black;
  width: 100%;
  height: fit-content;
`;

export const Img = styled.img`
  width: 100%;
  background-size: cover;
  height: 571px;
  opacity: 0.7;
`;
export const Icon = styled.div``;

// Icon.Left = styled(arrow)`
//   @media (max-width: 700px) {
//     display: none;
//   }
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   top: 50%;
//   left: 0px;
//   transform: translate(100%, 50%);
//   width: 45px;
//   height: 45px;
//   padding: 12px;
//   color: white;
//   background: white;
//   opacity: 0.5;
//   border-radius: 50%;
//   cursor: pointer;
//   z-index: 999;
//   :hover {
//     opacity: 0.97;
//   }
//   & path {
//     fill: #0d263b;
//   }
// `;
// Icon.Right = styled(arrow)`
//   @media (max-width: 700px) {
//     display: none;
//   }
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   top: 50%;
//   right: 0;
//   transform: translate(-100%, -40%) rotate(180deg);
//   width: 45px;
//   height: 45px;
//   padding: 12px;
//   color: black;
//   background: white;
//   opacity: 0.5;
//   border-radius: 50%;
//   cursor: pointer;
//   z-index: 999;
//   :hover {
//     opacity: 0.97;
//   }
//   & path {
//     fill: #0d263b;
//   }
// `;

// export const Box = styled.div`
//   background: black;
//   width: 100%;
//   height: 571px;
//   position: relative;
// `;
Box.Main = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// export const Title = styled.div`
//   /* @media (max-width: 700px) {
//     font-size: ${({ size }) => (size ? `${size}px` : "30px")};
//   } */
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 700;
//   font-size: ${({ size }) => (size ? `${size}px` : "40px")};
//   line-height: 48px;
//   letter-spacing: ${({ big }) => big && "-0.02em"};
//   color: #ffffff;
// `;

// Icon.Bed = styled(bed)`
//   width: 19px;
//   height: 13.6px;
// `;
// Icon.Bath = styled(bath)``;
// Icon.Garge = styled(garge)``;
// Icon.SqFt = styled(ruler)``;

export const Button = styled.button`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 2px;
  width: 180px;
  height: 44px;
  background: none;
  cursor: pointer;
  margin-top: 48px;
`;
