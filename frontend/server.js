
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
        const hotel = response.data;
        res.send(`
            <html>
            <head><title>${hotel.hotel_name}</title></head>
            <script src="https://cdn.tailwindcss.com"></script>
            <body>
                <h1>${hotel.hotel_name}</h1>
                <p>Address: ${hotel.adress}</p>
                <p>Category: ${hotel.klas}</p>
                <p>Price per night: ${hotel.baxasi} $</p>
                ${hotel.image1 ? `<img src="${hotel.image1}" alt="Hotel Image 1" width="300">` : ''}
                ${hotel.image2 ? `<img src="${hotel.image2}" alt="Hotel Image 2" width="300">` : ''}
                ${hotel.image3 ? `<img src="${hotel.image3}" alt="Hotel Image 3" width="300">` : ''}
                <br><br>
                <a href="/"> <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Button</button></a>
            </body>
            </html>
        `);
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


