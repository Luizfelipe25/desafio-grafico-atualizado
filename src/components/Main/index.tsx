import * as S from './styles'
import { useEffect, useState } from 'react'

import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import options from 'components/Chart'

function Data() {
  const [list, setList] = useState([])
}

const Main = () => (
  <S.Wrapper>
    <S.Title>React Avançado</S.Title>
    <S.Description>boilerplate</S.Description>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </S.Wrapper>
)

export default Main
