const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// Configuration CORS pour autoriser les requêtes du frontend
app.use(cors({
  origin: "https://wellcare-calendar-connect.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Route simple pour vérifier que l'API fonctionne
app.get("/", (req, res) => {
  res.json({ status: "success", message: "API is running" });
});

// Route de santé pour le check de santé
app.get("/health", (req, res) => {
  res.json({ status: "healthy", message: "API is healthy" });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

