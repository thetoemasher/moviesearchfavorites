const axios = require('axios');
const base_url = 'https://api.themoviedb.org/3/search/movie';
const api = require('../api_key')
const api_key = api.api;

let movies = [];
let favorites = [];

module.exports = {
    readMovies: (req, res) => {
        let {term} = req.params;
        axios.get(`${base_url}?api_key=${api_key}&language=en-US&query=${term}&page=1&include_adult=false`).then(item => {
            movies = item.data.results;
            res.status(200).send(movies)
        })
    },
    createFav: (req, res) => {
        for (let i = 0; i < favorites.length; i++) {
            if (favorites[i].id === +req.body.id) {
                return null;
            }
        }
        favorites.push(req.body);
        res.status(200).send(favorites);
    },
    readFavs: (req, res) => {
        res.status(200).send(favorites);
    },
    deleteFav: (req, res) => {
        let {id} = req.params;
        let index = null;
        favorites.forEach((movie, i) => {
            if(movie.id === +id) {
                index = i
            } 
        });
        favorites.splice(index, 1);
        res.status(200).send(favorites);
    },
    searchFavs: (req, res) => {
        let {term} = req.params;
        let re = new RegExp(term, 'gi')
        let filteredFavorites = favorites.filter(item => re.test(item.title));
        res.status(200).send(filteredFavorites);
    }
}