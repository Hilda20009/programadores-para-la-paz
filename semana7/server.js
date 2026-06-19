const express = require('express');
const app = express();

// Middleware para recibir datos en formato JSON
app.use(express.json());

// Array donde se almacenan los reportes en memoria
let reportes = [];

// Ruta GET: Consultar todos los reportes
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// Ruta POST: Agregar un nuevo reporte
app.post('/reportes', (req, res) => {
  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });
});

// Levantar el servidor
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
