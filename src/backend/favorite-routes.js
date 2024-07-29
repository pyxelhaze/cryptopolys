const express = require('express');
const mysql = require('mysql2/promise');
const router = express.Router();

require('dotenv').config();

const dbConfig = {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
};

router.post('/addFavorite', async (req, res) => {
    const { userId, cryptoId } = req.body;

    console.log('Request body:', req.body);

    if (!userId || !cryptoId) {
        return res.status(400).json({ message: 'userId and cryptoId are required' });
    }

    try {
        const connection = await mysql.createConnection(dbConfig);
        const query = 'INSERT INTO favorites (user_id, crypto_id) VALUES (?, ?)';
        const [result] = await connection.execute(query, [userId, cryptoId]);
        console.log('Query result:', result);
        await connection.end();
        res.status(200).json({ message: 'Favorite added successfully' });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


router.get('/favorites', async (req, res) => {
    const { userId } = req.query;

    /*   console.log('Query parameters:', req.query); */

    if (!userId) {
        return res.status(400).json({ message: 'userId is required' });
    }

    try {
        const connection = await mysql.createConnection(dbConfig);
        const query = 'SELECT crypto_id FROM favorites WHERE user_id = ?';
        const [rows] = await connection.execute(query, [userId]);
        await connection.end();
        res.status(200).json(rows);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
