const express = require('express');
const businessRoutes = require('./routes/businessRoutes');
const calendarRoutes = require('./routes/calendarRoutes');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/business', businessRoutes);
app.use('/calendar', calendarRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
