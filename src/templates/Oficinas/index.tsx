import OficinaContent from '../../components/OficinaContent'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import * as S from './styles'
import Divider from '../../components/Divider'

const Oficinas = () => {
  return (
    <S.Wrapper>
      <Menu />
      <Divider title='OFICINAS' color="secondary"/>
      <OficinaContent
      name="Inglês para crianças"
      description="Essa é uma oficina para ensinar inglês as crianças carentes para capacitá-las e promover um futuro melhor a elas. O inglês é de suma imporância e abre muitas portas para oportunidades de melhoria de vida."
      image='/img/logo.png'
      time="seg a sex: 18:00 até 19:00"
    />
    <OficinaContent
      name="Inglês para crianças"
      description="Essa é uma oficina para ensinar inglês as crianças carentes para capacitá-las e promover um futuro melhor a elas. O inglês é de suma imporância e abre muitas portas para oportunidades de melhoria de vida."
      image='/img/logo.png'
      time="seg a sex: 18:00 até 19:00"
      invert
    />
    <OficinaContent
      name="Inglês para crianças"
      description="Essa é uma oficina para ensinar inglês as crianças carentes para capacitá-las e promover um futuro melhor a elas. O inglês é de suma imporância e abre muitas portas para oportunidades de melhoria de vida."
      available={false}
      image='/img/logo.png'
      time="seg a sex: 18:00 até 19:00"
      
    />
      <Footer />
    </S.Wrapper>
  )
}

export default Oficinas
