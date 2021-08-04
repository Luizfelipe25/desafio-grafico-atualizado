import ChartConfigure from 'components/Chart'
import * as S from './styles'
const Main = () => (
  <S.Wrapper>
    <S.Title>React Avançado</S.Title>
    <S.Description>boilerplate</S.Description>
    <select id="filter">
      <option selected value="AllValues">
        Desde o Início
      </option>
      <option value="LastM">Ultimo Mês</option>
      <option value="Last3M">Ultimos 3 meses</option>
      <option value="LastY">Ultimo ano</option>
      <option value="Last2Y">Ultimos 2 anos</option>
    </select>
    <ChartConfigure />
  </S.Wrapper>
)

export default Main
