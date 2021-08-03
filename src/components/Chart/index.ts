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
    pointFormat: '{series.name}<b>{point.y:,.0f}</b><br/>warheads in {point.x}'
  }
}

export default options
