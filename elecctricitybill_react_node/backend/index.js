const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/calculate-bill', (req, res) => {
    const units = req.body.units;
    let bill = 0;
    let breakdown = [];

    if (units <= 50) {
        bill = units * 3.50;
        breakdown.push({ units, rate: 3.50, amount: bill });
    } else if (units <= 150) {
        bill = 50 * 3.50 + (units - 50) * 4.00;
        breakdown.push({ units: 50, rate: 3.50, amount: 50 * 3.50 });
        breakdown.push({ units: units - 50, rate: 4.00, amount: (units - 50) * 4.00 });
    } else if (units <= 250) {
        bill = 50 * 3.50 + 100 * 4.00 + (units - 150) * 5.20;
        breakdown.push({ units: 50, rate: 3.50, amount: 50 * 3.50 });
        breakdown.push({ units: 100, rate: 4.00, amount: 100 * 4.00 });
        breakdown.push({ units: units - 150, rate: 5.20, amount: (units - 150) * 5.20 });
    } else {
        bill = 50 * 3.50 + 100 * 4.00 + 100 * 5.20 + (units - 250) * 6.50;
        breakdown.push({ units: 50, rate: 3.50, amount: 50 * 3.50 });
        breakdown.push({ units: 100, rate: 4.00, amount: 100 * 4.00 });
        breakdown.push({ units: 100, rate: 5.20, amount: 100 * 5.20 });
        breakdown.push({ units: units - 250, rate: 6.50, amount: (units - 250) * 6.50 });
    }

    res.json({ bill, breakdown });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
