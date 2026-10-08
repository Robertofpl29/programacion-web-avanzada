const express = require('express');
const app = express();
const productosRouter = require('./routes/productos');

// 1. Middlewares globales (se ejecutan primero)
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// 2. Rutas
app.get('/error-demo', (req, res, next) => {
  next(new Error('Error de demostración'));
});

app.use('/productos', productosRouter);

// 3. Middleware de manejo de errores (SIEMPRE AL FINAL)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Ocurrió un error en el servidor' });
});

// 4. Iniciar servidor
app.listen(3001, () => {
  console.log('Servidor escuchando en el puerto 3001 http://localhost:3001');
});
