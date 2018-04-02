const axios = require('axios');
const base_url = 'https://api.themoviedb.org/3/search/';
const api = require('../api_key')
const api_key = api.api;


let shows = [];
let people = [];

module.exports = {
    searchShows: (req, res) => {
        let {term} = req.params;
        axios.get(`${base_url}tv?api_key=${api_key}&language=en-US&query=${term}&page=1`).then(item => {
            shows = item.data.results;
            res.status(200).send(shows)
        })
    },
    searchPeople: (req, res) => {
        let { term } = req.params;
        axios.get(`${base_url}person?api_key=${api_key}&language=en-US&query=${term}&page=1&include_adult=false`).then(item => {
            people = item.data.results;
            res.status(200).send(people);
        })
    }
}