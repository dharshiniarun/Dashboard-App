import React from "react";

const feedback=[
    {name : 'Jenny Wilson', comment:'Good', rating:'4' },
    {name : 'Dianne Russell', comment:'Good', rating:'5' },
    {name : 'Devon Lane', comment:'Good', rating:'5' },
];

function Feedback(){
    return(
        <div className="feedback">
            <h5><b>Customer's Feedback</b></h5>
            {feedback.map((item, index) =>(
                <div key={index} className="feedback_item">
                    <h7><b><i class="bi bi-person-circle"></i>{item.name}</b></h7>
                    <br></br>
                    {'⭐'.repeat(item.rating)}
                    <p>{item.comment}</p>
                </div>
            )) }
        </div>
    );
}

export default Feedback;