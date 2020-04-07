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

    const leadingZero = num => {
        if (num < 10) return "0" + num
        return num
    }
    
    const formatWithCommas = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    const rows = data.map((entry, i) => {
        var selCls = ""
        var now = new Date()
        if (entry.date.getTime()-entry.date.getHours()*3600000-entry.date.getMinutes()*60000-entry.date.getSeconds()*1000-entry.date.getMilliseconds() == now.getTime()-now.getHours()*3600000-now.getMinutes()*60000-now.getSeconds()*1000-now.getMilliseconds())
            selCls = "curdate"

        return (
            <tr key={i}>
                <td className={selCls}>{leadingZero(entry.date.getDate()) + "/" + leadingZero(entry.date.getMonth()+1) + "/" + entry.date.getFullYear()}</td>
                <td>{formatWithCommas(entry.sum.toFixed(0))}</td>
                <td>{(entry.dailyRate != "" ? entry.dailyRate.toFixed(2) : "")}</td>
                <td>{(entry.averageRate != "" ? entry.averageRate.toFixed(2) : "")}</td>
                <td>{(entry.avgRate5 != "" ? entry.avgRate5.toFixed(2) : "")}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends React.Component {
    render() {
        const {data} = this.props

        return (
            <table className="corona-table">
                <TableHeader />
                <TableBody data={data} />
            </table>
        )
    }
}

export default Table