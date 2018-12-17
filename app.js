const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.end('chat iniciado')
})

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
})