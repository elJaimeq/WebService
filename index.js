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
Tu madre tiene una polla
que ya la quisiera yo
me dio pena por tu padre
el día en que se enteró
que fue la noche de bodas
¿Quién se iba a imaginar?
que iba a ser a tu padre
al que lo iban a encular
transexuaaaal!
transexuaaaal!
tu madre tiene muy grande el pene
no sé por qué
nunca más te podrás sentar
como te coja por detrás
tu madre tiene muy grande el pene
es un transexuaaaal!
      </h1>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});