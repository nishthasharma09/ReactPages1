import React from 'react'
import { Line} from 'react-chartjs-2'
function LineChart() {

    const data ={
        labels: ['1-5', '6-10', '11-15', '15-20'],
        datasets: [
            {
                label: 'People',
                data: [43, 52, 60, 45]
            }
        ]

    }
    return(
        <Line data={data} />
    )
}


export default LineChart