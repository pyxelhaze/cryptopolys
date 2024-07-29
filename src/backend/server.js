
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3306;

app.get('/', (req, res) => {
    res.send('Server is running!');
});


const authRoutes = require('./auth-routes');
const favoritesRoutes = require('./favorite-routes');

app.use(cors());
app.use(bodyParser.json());


app.use('/api', authRoutes);
app.use('/api', favoritesRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
