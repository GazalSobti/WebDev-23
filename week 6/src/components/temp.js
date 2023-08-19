import React, { useState } from "react";


export default function Pie(){
    const {pieData,setPieData}=useState({
        one:'apple',
        two:'cherry',
        three:'cranberry',
        four:'peach',
        five:'pumpkin',
        six:'strawberry'
    });

    const handleInputChange =(event)=>{
       setPieData({ pieData: event.target.value })
       const showImg=pieData =>
       {<img src=""></img>}

    }


    return(
        <div>
                
                <select value={pieData} onChange={handleInputChange}>
                    <option value={pieData.one}>Apple Pie</option>
                    <option value={pieData.two}>Cherry Pie</option>
                    <option value={pieData.three}>Cranberry Pie</option>
                    <option value={pieData.four}>Peach Pie</option>
                    <option value={pieData.five}>Pumpkin Pie</option>
                    <option value={pieData.six}>Strawberry Pie</option>
                </select>

        </div>
    );
}
