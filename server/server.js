const express = require('express');
const http = require( 'http');
const app = express();
//port
const PORT = process.env.PORT || 9090;

//routes api
const routeProducts = require('../controller/productsController')
app.use(routeProducts)


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT);