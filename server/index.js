const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/movies_controller');
const sc = require('./controllers/shows_controller');
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

//updates the average rating on favorites
app.put('/api/movies/favorites/:id', mc.updateFavRating)

//updates the average rating on movies
app.put('/api/movies/:id', mc.updateMovieRating)

//search for shows
app.get('/api/shows/search/:term', sc.searchShows)





app.listen(port, () => console.log(`Having fun here at ${7859}`))