const express = require('express');
const axios = require('axios'); // Importamos para llamar a la API
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

// Ruta
app.get('/', async (req, res) => {
    try {

        const url = 'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Mexican%20Primera%20League';
        
        // Pedimos los datos con Axios 
        const respuesta = await axios.get(url);
        
        // Guardamos la lista de equipos en una variable
        // devuelve un objeto con una propiedad llamada teams
        const listaEquipos = respuesta.data.teams;
        

        // Renderizamos la vista index y le enviamos los datos
        res.render('index', { equipos: listaEquipos });

    } catch (error) {
        console.error("Hubo un error al conectar con la API:", error);
        res.send("Error al cargar los equipos.");
    }
});

// Nueva ruta
app.get('/team/:id', async (req, res) => {
    const idEquipo = req.params.id; // Capturamos el id de la URL
    
    try {
        // Pedimos los jugadores de ese equipo
        const url = `https://www.thesportsdb.com/api/v1/json/3/lookup_all_players.php?id=${idEquipo}`;
        const respuesta = await axios.get(url);
        const jugadores = respuesta.data.player;

        // Renderizamos una vista nueva llamada teams
        res.render('teams', { jugadores: jugadores });

    } catch (error) {
        console.error(error);
        res.send("Error al cargar los jugadores.");
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000 🚀');
});