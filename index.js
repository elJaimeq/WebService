const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Mi Web Service</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #0400ff; /* Corregido a un hex válido */
          font-family: sans-serif;
        }
        h1 {
          color: black;
          font-size: 3rem;
          text-align: center;
          white-space: pre-wrap; /* Preserva saltos de línea */
        }
      </style>
    </head>
    <body>
      <h1>
hola soy Jose Alfredo Tirado Jaime (22030047) me gusta los hotdogs del marro jijijija
      </h1>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});