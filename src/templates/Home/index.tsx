import Divider from "../../components/Divider";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import * as S from "./styles";
import VideoHome from "../../components/VideoHome";

const Home = () => {

  return (
    <S.Wrapper>
      <S.Menu>
        <Menu />
      </S.Menu>
      <Banner />
      <S.VideoWrapper>
        <VideoHome />
      </S.VideoWrapper>
      <Footer color="primary" />
    </S.Wrapper>
  );
};

export default Home;
