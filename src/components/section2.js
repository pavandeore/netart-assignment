import React from 'react';

import machines from  '../assets/3.png';

function section2(){
    return(
        <div className="section2">
            <img src={machines} alt="Machines" className="machines" />
            <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            <p className="redline"/>
        </div>
    )
}

export default section2;