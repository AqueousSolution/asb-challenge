import React from 'react';

const MetricCard = ({amount,status}) => {
    return (
        <div className='metric-card'>
            <h1 className='metric-amt'>{amount}</h1>
            <p className='metric-status'>{status}</p>
            <img src='./images/warning.svg' className='metric-img'/>
        </div>
      );
}
 
export default MetricCard;