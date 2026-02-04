"use strict";
import express from "express";
const app = express();
const port = 3000;

app.use((request, response) => {
    console.log(`URL: ${request.url}`);
    response.end('Hello Node');
});

// Start the server
app.listen(port, (error) => {
    if(error) return console.log(`Error: ${error}`);
    console.log(`Server is listening on port ${port}`);
});