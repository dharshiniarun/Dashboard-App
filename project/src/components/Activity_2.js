import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  var options = {
    title: 'Population of Largest U.S. Cities',
    chartArea: {width: '50%'},
    hAxis: {
      title: 'Total Population',
      minValue: 0
    },
    vAxis: {
      title: 'City'
    }
  };

function Activity() {
    return(
        <div className="Activity"> 
           <h2>Activity</h2>
           <div className="chart">
           <Chart
                chartType="Bar"
                data={data}
                options={options}
            />
           </div>
        </div>
    );
}

export default Activity;