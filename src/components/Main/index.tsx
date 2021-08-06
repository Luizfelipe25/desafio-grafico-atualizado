import React, { useState } from 'react'
import * as S from './styles'
import ChartConfigure from 'components/Chart'

const Main = () => {
  const [selectedValue, setSelectedValue] = useState('')

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.currentTarget.value)
  }

  return (
    <S.Wrapper>
      <S.Title>React Avançado</S.Title>
      <S.Description>boilerplate</S.Description>
      <select id="filter" onChange={handleSelect}>
        <option selected value="0">
          Desde o Início
        </option>
        <option value="1">Ultimo Mês</option>
        <option value="2">Ultimos 3 meses</option>
        <option value="3">Ultimo ano</option>
        <option value="4">Ultimos 2 anos</option>
      </select>

      <ChartConfigure value={selectedValue} />
    </S.Wrapper>
  )
}

export default Main
