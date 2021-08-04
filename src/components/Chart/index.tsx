import React, { useState, useEffect } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

import { getList } from 'Services'

function ChartConfigure() {
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

  const options = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Historico de investimentos'
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
