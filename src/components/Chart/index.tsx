import React, { useState, useEffect } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

import { getList } from 'Services'
import { fsyncSync } from 'fs'

type ValuesToFilter = {
  value: string
}

const ChartConfigure = ({ value }: ValuesToFilter) => {
  const [list, setList] = useState([])

  useEffect(() => {
    let mounted = true
    getList().then((values) => {
      if (mounted) {
        setList(values)
      }
    })
    return () => {
      mounted = false
    }
  }, [])

  if (value === '1') {
    const data = list.map((item) => item[0])
    const valueInReal = list.map((item) => item[1])
    const FilteredValue = data.filter(function (data) {
      const mesAnterior = new Date('12-01-2020').getTime()
      return data < mesAnterior
    })

    const options = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Histórico de investimentos'
      },
      xAxis: {
        allowDecimals: false,
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'Valor em Reais'
        }
      },
      tooltip: {
        pointFormat: '{series.name}<b> {point.y:,.0f}'
      },
      plotOptions: {
        area: {
          pointStart: FilteredValue,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: [
        {
          name: 'Valor Gasto <b>R$',
          threshold: null
        }
      ]
    }
    return <HighchartsReact highcharts={Highcharts} options={options} />
  }
  //CRIAR UM BOTÃO PARA ALTERAR O ESTADO DO COMPONENTE E MUDAR O GRAFICO.
  const options = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Histórico de investimentos'
    },
    xAxis: {
      allowDecimals: false,
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: 'Valor em Reais'
      }
    },
    tooltip: {
      pointFormat: '{series.name}<b> {point.y:,.0f}'
    },
    series: [
      {
        name: 'Valor Gasto <b>R$',
        data: list,
        threshold: null
      }
    ]
  }
  return <HighchartsReact highcharts={Highcharts} options={options} />
}
export default ChartConfigure
