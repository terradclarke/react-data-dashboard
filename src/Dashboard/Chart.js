import React from 'react'
import {Card} from "./Card";

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    chart: {
        height: '360px',
        type: 'column',
        style: {
            fontFamily: `'Frank Ruhl Libre', serif`,
        }
    },
    title: {
        text: 'Revenue by Product'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ]
    },
    yAxis: {
        min: 0,
        reversedStacks: false,
        title: {
            text: 'Billions of Dollars'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        series: {
            borderWidth: 0
        },
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Phones',
        data: [5, 3, 4, 7, 2],
        color: '#149947'
    }, {
        name: 'Services',
        data: [2, 2, 3, 2, 1],
        color: '#1dda65'
    }, {
        name: 'Laptops',
        data: [3, 4, 4, 2, 5],
        color: '#5CF396'
    }, {
        name: 'Tablets',
        data: [3, 4, 4, 2, 5],
        color: '#C1F8D7'
    }]
}

export function Chart() {
    return <Card height={400}>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </Card>
}