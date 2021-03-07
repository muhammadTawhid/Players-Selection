import React from 'react';

const Added = (props) => {
    const data = props.datapassed;
    const totals = data.reduce((total, item) => total + item.Cost , 0);
    
    return (
        <div >
             <h1>Total Budget:{totals} </h1>
        {
            data.map(dt => (
                <div >
                    <img src={dt.Img} alt=""/>
                    <h3>Name: {dt.Name}</h3>
                    <h3>Cost: {dt.Cost}</h3>
                </div>
            ))
        }
     </div>
    );
};


export default Added;
