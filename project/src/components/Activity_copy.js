import React from "react";
const data=[5000,7000,4000,11000,9000,13000,15000,9000,8000,7000,9000,11000,10000,8000,5000];

function Activity() {
    return(
        <div className="Activity"> 
           <h2>Activity</h2>
           <div className="chart">
             {data.map((value,index) => (
                <div key={index} className="bar" style={{height: `${value/100}px`}}></div>
             ))}
           </div>
        </div>
    );
}

export default Activity;