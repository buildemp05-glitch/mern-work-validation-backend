const express = require('express');
const app = express();
const testRoutes = require('./routes/test.routes');
app.use('/api/test', testRoutes);
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend working yeah!!');
});



const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server ${PORT}`)
});