import React, { useState, useEffect } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

import { getList } from 'Services'

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
    const limit = new Date('2020-01-01')
    const filtered = list.filter((dates) => dates[0] > limit)
    const options = {
      chart: {
        type: 'area'
      },
      title: {
        text: ''
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
          data: filtered,
          threshold: null
        }
      ]
    }
    return <HighchartsReact highcharts={Highcharts} options={options} />
  }

  if (value === '2') {
    const limit = new Date('2019-11-01')
    const filtered = list.filter((dates) => dates[0] > limit)
    const options = {
      chart: {
        type: 'area'
      },
      title: {
        text: ''
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
          data: filtered,
          threshold: null
        }
      ]
    }
    return <HighchartsReact highcharts={Highcharts} options={options} />
  }

  if (value === '3') {
    const limit = new Date('2020-01-01')
    const filtered = list.filter((dates) => dates[0] > limit)
    const options = {
      chart: {
        type: 'area'
      },
      title: {
        text: ''
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
          data: filtered,
          threshold: null
        }
      ]
    }
    return <HighchartsReact highcharts={Highcharts} options={options} />
  }

  if (value === '4') {
    const limit = new Date('2019-01-01')
    const filtered = list.filter((dates) => dates[0] > limit)
    const options = {
      chart: {
        type: 'area'
      },
      title: {
        text: ''
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
          data: filtered,
          threshold: null
        }
      ]
    }
    return <HighchartsReact highcharts={Highcharts} options={options} />
  }

  const options = {
    chart: {
      type: 'area'
    },
    title: {
      text: ''
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
