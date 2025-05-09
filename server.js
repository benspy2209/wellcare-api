const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Configuration CORS
app.use(cors({
  origin: '*', // Ou spécifiez votre domaine frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Route racine
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'API opérationnelle' });
});

// Route pour lister les événements
app.get('/api/events', (req, res) => {
  // Logique pour récupérer les événements
  // Pour le moment, retourner des données fictives
  res.json({ 
    events: [
      {
        id: '123abc',
        summary: 'Consultation test',
        description: 'Ceci est un événement de test',
        start: { dateTime: '2023-07-15T09:00:00' },
        end: { dateTime: '2023-07-15T10:00:00' },
        attendees: [{ email: 'patient@example.com' }],
        location: 'Cabinet médical'
      }
    ] 
  });
});

// Route pour créer un événement
app.post('/api/events', (req, res) => {
  // Logique pour créer un événement
  console.log('Données reçues:', req.body);
  // Pour le moment, simplement retourner un succès
  res.json({ 
    status: 'success', 
    message: 'Événement créé avec succès',
    event: {
      id: 'new-event-id',
      ...req.body
    }
  });
});

// Route pour vérifier les disponibilités
app.post('/api/freebusy', (req, res) => {
  // Logique pour vérifier les disponibilités
  console.log('Données reçues:', req.body);
  res.json({ 
    busy: [
      {
        start: '2023-07-16T14:00:00',
        end: '2023-07-16T15:30:00'
      }
    ] 
  });
});

// Route pour annuler un rendez-vous
app.post('/api/cancel_appointment', (req, res) => {
  // Logique pour annuler un rendez-vous
  console.log('Demande d\'annulation pour l\'ID:', req.body.eventId);
  // Pour le moment, simplement retourner un succès
  res.json({ 
    status: 'success', 
    message: 'Rendez-vous annulé avec succès' 
  });
});

app.listen(port, () => {
  console.log(`API démarrée sur le port ${port}`);
});
