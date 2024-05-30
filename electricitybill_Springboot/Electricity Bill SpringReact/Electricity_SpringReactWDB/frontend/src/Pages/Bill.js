// import React, { useState } from 'react';
// import './Bill.css';

// export default function Bill() {
//   const [units, setUnits] = useState(0);
//   const [bill, setBill] = useState(null);

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch(`http://localhost:8082/electricity/calculate/${units}`)
//       .then((res) => res.json())
//       .then((result) => setBill(result.bill));
//     console.log('units consumed are ' + units);
//   }

//   return (
//     <div className="bill-container">
//       <div className="bill-form">
//         <h1>Electricity Bill Calculator</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="units">Enter number of units consumed:</label>
//             <input
//               type="number"
//               id="units"
//               className="form-control"
//               value={units}
//               onChange={(e) => setUnits(e.target.value)}
//               min="0"
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">Calculate</button>
//         </form>
//         {bill !== null && (
//           <div className="result">
//             <h2>Total Bill: Rs. {bill}</h2>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react'
// import axios from "axios";
import './Bill.css';
export default function Bill() {
const[units,setUnits] = useState(0)
function handleSubmit(e)
{
    e.preventDefault();
    fetch(`http://localhost:8082/electricity/calculate/${units}`).then((res)=>res.json())
    .then(result=>setUnits(result));
    console.log('units consumed are '+units);
}
  return (
    <div className='body'>
        <h1>BILL</h1>
        <label htmlFor="units">Enter number of units consumed</label>
        <input type="number" id='units' onChange={(e)=>setUnits(e.target.value)} />
        <input type="submit"    onClick={handleSubmit} />
        <p>Total Bill : {units}</p>
    </div>
  )
}
