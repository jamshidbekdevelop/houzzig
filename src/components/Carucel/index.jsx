import React, { useRef } from "react";
import {
  Bath,
  Bed,
  Box,
  CarouselButton,
  CarouselsBox,
  CarouselSliders,
  CaruselWrapper,
  Div,
  Garge,
  Img,
  Left,
  Main,
  MainCarusel,
  Right,
  SqFt,
  Title,
} from "./styled";
import  Button  from "../Geniric/Button";
import img1 from "../../assets/images/home-img.jpg";
import img2 from "../../assets/images/popular-home-img.jpg";
const Caroucels = () => {
  const slider = useRef();
  return (
    <CaruselWrapper>
      <CarouselSliders>
        <CarouselButton onClick={() => slider.current?.prev()}>
          <Left />
        </CarouselButton>
        <Box>
          <Title>Skyper Pool Partment</Title>
          <Title size={16}>112 Glenwood Ave Hyde Park, Boston, MA</Title>
          <Main>
            <Div>
              <Bed />4 beds
            </Div>
            <Div>
              <Bath />5 Baths
            </Div>
            <Div>
              <Garge />1 Garage
            </Div>
            <Div>
              <SqFt />
              1200 Sq Ft
            </Div>
          </Main>
          <Title size={28}>$5,250/mo</Title>
          <Button mt={48} width={184} height={44}>Read more</Button>
        </Box>
        <CarouselButton onClick={() => slider.current?.next()}>
          <Right />
        </CarouselButton>
      </CarouselSliders>
      <CarouselsBox>
        <MainCarusel ref={slider} dots autoplay>
          <Img src={img1} />
          <Img src={img2} />
          <Img src={img1} />
          <Img src={img2} />
          <Img src={img1} />
        </MainCarusel>
      </CarouselsBox>
    </CaruselWrapper>
  );
};

export default Caroucels;
