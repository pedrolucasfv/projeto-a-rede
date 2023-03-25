import Divider from "../../components/Divider";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import * as S from "./styles";

const Home = () => {
  return (
    <S.Wrapper>
      <S.Menu>
        <Menu border />
      </S.Menu>
    
      <Banner />
      <Footer />
    </S.Wrapper>
  );
};

export default Home;
