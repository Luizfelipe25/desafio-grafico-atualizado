import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #fff;
  color: #06092b;
  width: 100%;
  height: 100%;
`

export const Title = styled.h1`
  font-size: var(--medium);
  margin-bottom: var(--medium);
  margin-top: var(--medium);
  text-align: center;
`

export const Description = styled.h2`
  margin-bottom: 50px;
  align-items: center;
  text-align: center;
  justify-content: center;

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: #eeeeee;
    background-image: none;
    flex: 1;
    padding: 0 0.5em;
    color: #06092b;
    cursor: pointer;
    font-size: 1em;
    font-family: 'Open Sans', sans-serif;
  }

  select::-ms-expand {
    display: none;
  }
`

export const Chart = styled.section`
  text-align: center;
  align-items: center;
  max-height: 50%;
`
