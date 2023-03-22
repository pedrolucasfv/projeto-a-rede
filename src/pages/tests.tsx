import OficinaContent from "../components/OficinaContent";

export default function Test() {
  return (
    <OficinaContent
      name="Inglês para crianças"
      description="Essa é uma oficina para ensinar inglês as crianças carentes para capacitá-las e promover um futuro melhor a elas. O inglês é de suma imporância e abre muitas portas para oportunidades de melhoria de vida."
      available={false}
      image='/img/logo.png'
      time="seg a sex: 18:00 até 19:00"
    />
  );
}
