import React, { useState } from 'react'
import * as S from './styles'
import ChartConfigure from 'components/Chart'
import { CalendarOutline } from '@styled-icons/evaicons-outline/CalendarOutline'
const Main = () => {
  const [selectedValue, setSelectedValue] = useState('')

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.currentTarget.value)
  }

  return (
    <S.Wrapper>
      <S.Select>
        <S.Title>Gráfico de Rendimentos</S.Title>
        <S.Period>
          <CalendarOutline size={29} />
          Escolha um período:
        </S.Period>
        <select id="filter" onChange={handleSelect}>
          <option selected value="0">
            Desde o Início
          </option>
          <option value="1">Ultimo Mês</option>
          <option value="2">Ultimos 3 meses</option>
          <option value="3">Ultimo ano</option>
          <option value="4">Ultimos 2 anos</option>
        </select>
      </S.Select>

      <S.Chart>
        <ChartConfigure value={selectedValue} />
      </S.Chart>
    </S.Wrapper>
  )
}

export default Main
