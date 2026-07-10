const express = require("express");

const app = express();

app.use(express.json());

const postRoutes = require("./routes/postRoutes");
app.use("/api", postRoutes);

app.get("/", (req, res) => {
    res.send("Blog REST API is Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});