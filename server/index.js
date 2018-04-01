const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/movies_controller');
const cors = require('cors');

const port = 7859;
const app = express();

app.use(bodyParser.json());
app.use(cors());

//regular search for movie
app.get('/api/movies/search/:term', mc.readMovies);

//just sends favorites array
app.get('/api/movies/favorites', mc.readFavs)

//search favs
app.get('/api/movies/favorites/search/:term', mc.searchFavs)

//adds movie to favorites
app.post('/api/movies/favorites', mc.createFav)

//delete movie from favorites
app.delete('/api/movies/favorites/:id', mc.deleteFav)

//updates the average rating
app.put('/api/movies/favorites/rating', mc.updateRating)





app.listen(port, () => console.log(`Having fun here at ${7859}`))