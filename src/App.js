import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Table.css';
import orgdata from "./corona_israel.json"
import Table from "./Table"

const getDerivedData = data => {
  return data.map((entry, i) => {
    var dailyRate = (i != 0 ?  (entry.sum / data[i-1].sum) : "")
    var averageRate = (i != 0 ? Math.pow(entry.sum/data[0].sum, (1/(i+1))) : "" )
    var avgRate5 = (i >= 4 ? Math.pow(entry.sum/data[i-4].sum, (1/5)) : "" )
    return {
      "date" : new Date(entry.date),
      "sum" : entry.sum,
      "dailyRate" : dailyRate,
      "averageRate" : averageRate,
      "avgRate5" : avgRate5
    }
  })
}

const getPredictData = data => {
  const maxDate = new Date(data[data.length-1].date)
  var derivedData = getDerivedData(data)

  for (var i = derivedData.length, maxI = i+40 ; i < maxI ; i++) {
    var date = new Date(derivedData[i-1].date)
    date.setDate(date.getDate()+1)
    var avgRate5 = Math.pow(derivedData[i-1].sum/derivedData[i-5].sum, (1/5))
    var sum = derivedData[i-1].sum * avgRate5
    var dailyRate = sum / derivedData[i-1].sum
    var averageRate = Math.pow(sum/derivedData[0].sum, (1/(i+1)))

    derivedData = [...derivedData, {
      "date" : date,
      "sum" : sum,
      "dailyRate" : dailyRate,
      "averageRate" : averageRate,
      "avgRate5" : avgRate5
    }]
  }

  return derivedData
}

class App extends React.Component {
    render() {
      return <Table data={getPredictData(orgdata)} />
    }
}

export default App;
