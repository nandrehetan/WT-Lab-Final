// src/components/RateInfo.js
import React from 'react';

const RateInfo = () => {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <h5 className="card-title">Electricity Rates</h5>
                <p className="card-text">For the first 50 units: Rs. 3.50/unit</p>
                <p className="card-text">For the next 100 units: Rs. 4.00/unit</p>
                <p className="card-text">For the next 100 units: Rs. 5.20/unit</p>
                <p className="card-text">For units above 250: Rs. 6.50/unit</p>
            </div>
        </div>
    );
};

export default RateInfo;
