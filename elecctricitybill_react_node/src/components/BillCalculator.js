// src/components/BillCalculator.js
import React, { useState } from 'react';
import axios from 'axios';
import RateInfo from './RateInfo';

const BillCalculator = () => {
    const [units, setUnits] = useState('');
    const [billDetails, setBillDetails] = useState(null);

    const handleCalculate = async () => {
        try {
            const response = await axios.post('http://localhost:5000/calculate-bill', { units: parseFloat(units) });
            setBillDetails(response.data);
        } catch (error) {
            console.error('There was an error calculating the bill!', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Electricity Bill Calculator</h2>
            <RateInfo />
            <div className="form-group mt-3">
                <label htmlFor="units">Enter the number of units:</label>
                <input
                    type="number"
                    id="units"
                    className="form-control"
                    value={units}
                    onChange={(e) => setUnits(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={handleCalculate}>Calculate Bill</button>
            {billDetails && (
                <div className="mt-3">
                    <h4>Total Bill: Rs. {billDetails.bill.toFixed(2)}</h4>
                    <h5>Breakdown:</h5>
                    {billDetails.breakdown.map((item, index) => (
                        <p key={index}>{item.units} units @ Rs. {item.rate}/unit = Rs. {item.amount.toFixed(2)}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BillCalculator;
