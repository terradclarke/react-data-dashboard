import React, {useContext} from 'react'
import {Card} from "./Card";
import {ThemeContext} from "./Dashboard";
import {darkerGrey, lightGrey} from "./GlobalStyle";

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {chartData} from "./Data"

function getOptions(dark) {
    return {
        chart: {
            height: '360px',
            type: 'column',
            backgroundColor: dark ? darkerGrey : "white",
            style: {
                fontFamily: `'Frank Ruhl Libre', serif`,
            }
        },
        title: {
            text: 'Revenue by Product',
            style: {
                color: dark ? "white" : lightGrey,
            }
        },
        xAxis: {
            labels: {
                style: {
                    color: dark ? "white" : lightGrey,
                }
            },
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
            gridLineColor: dark ? 'grey' : 'lightGrey',
            labels: {
                style: {
                    color: dark ? darkerGrey : "white",
                }
            },
            min: 0,
            reversedStacks: false,
            title: {
                text: 'Billions of Dollars',
                style: {
                    color: dark ? "white" : lightGrey,
                }
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
            itemStyle: {
                style: {
                    color: dark ? "white" : lightGrey,
                }
            },
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
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
            shared: true,
            backgroundColor: dark ? darkerGrey : 'white',
            style: {
                    color: dark ? lightGrey : "black",
                }
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
        series: chartData,
    }
}

export function Chart() {
    const [theme, setTheme] = useContext(ThemeContext);
    const dark = theme === 'dark'
    return <Card height={400}>
        <HighchartsReact
            highcharts={Highcharts}
            options={getOptions(dark)}
        />
    </Card>
}