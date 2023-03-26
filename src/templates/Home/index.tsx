import Divider from "../../components/Divider";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import * as S from "./styles";
import Image from "next/image";

const Home = () => {
  return (
    <S.Wrapper>
      <S.Menu>
        <Menu border />
      </S.Menu>
      <Banner />
      <S.VideoWrapper>
       <video controls autoPlay={true} src="/img/video-home.mp4" style={{ width: "400px", height: "400px" }} />
      </S.VideoWrapper>
      <Footer />
    </S.Wrapper>
  );
};

export default Home;
