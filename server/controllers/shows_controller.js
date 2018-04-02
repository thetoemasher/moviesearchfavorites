const axios = require('axios');
const base_url = 'https://api.themoviedb.org/3/search/tv';
const api = require('../api_key')
const api_key = api.api;

let shows = [];

module.exports = {
    searchShows: (req, res) => {
        let {term} = req.params;
        axios.get(`${base_url}?api_key=${api_key}&language=en-US&query=${term}&page=1`).then(item => {
            shows = item.data.results;
            res.status(200).send(shows)
        })
    }
}