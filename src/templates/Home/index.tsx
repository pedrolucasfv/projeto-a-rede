import Divider from "../../components/Divider";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import * as S from "./styles";
import { useEffect, useState } from "react";
import VideoHome from "../../components/VideoHome";

const Home = () => {
  //const [video, setVideo] = useState([true, false, false]);



  return (
    <S.Wrapper>
      <S.Menu>
        <Menu border />
      </S.Menu>
      <Banner />
      <S.VideoWrapper>
      <VideoHome />
      </S.VideoWrapper>
      <Footer />
    </S.Wrapper>
  );
};

export default Home;
