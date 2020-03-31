import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>תאריך</th>
                <th>מספר נדבקים</th>
                <th>קצב הדבקה יומי</th>
                <th>ממוצע קצב הדבקה</th>
                <th>ממוצע קצב הדבקה ל-5 ימים אחורה</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const {data} = props
    
    const rows = data.map((entry, i) => {
        var dailyRate = (i != 0 ?  (entry.sum / data[i-1].sum).toFixed(2) : "")
        var averageRate = (i != 0 ? Math.pow(entry.sum/data[0].sum, (1/(i+1))).toFixed(2) : "" )
        var avgRate5 = (i >= 4 ? Math.pow(entry.sum/data[i-4].sum, (1/5)).toFixed(2) : "" )
        return (
            <tr>
                <td>{entry.date}</td>
                <td>{entry.sum}</td>
                <td>{dailyRate}</td>
                <td>{averageRate}</td>
                <td>{avgRate5}</td>
                <td></td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends React.Component {
    render() {
        const {data} = this.props

        return (
            <table>
                <TableHeader />
                <TableBody data={data} />
            </table>
        )
    }
}

export default Table