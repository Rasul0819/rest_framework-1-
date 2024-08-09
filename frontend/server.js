
const express = require('express');
const axios = require('axios');
const app = express();

const API_BASE_URL = 'http://127.0.0.1:8000/api';

// Маршрут для получения всех отелей
app.get('/hotels', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error retrieving hotels from Django API');
    }
});

// Маршрут для получения детальной информации об отеле
app.get('/hotels/:id', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/detail/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error retrieving hotel details from Django API');
    }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
