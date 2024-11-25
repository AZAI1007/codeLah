const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON bodies

// Sample route returning static data
app.get("/menu", (req, res) => {
    console.log("Menu route accessed");
    res.json({
        items: [
            { name: "Burger", price: 5.99 },
            { name: "Pizza", price: 7.99 },
            { name: "Salad", price: 4.99 }
        ]
    });
});

// Sample Route
app.get("/", (req, res) => {
    res.send("Welcome to MakanLah! Backend!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
