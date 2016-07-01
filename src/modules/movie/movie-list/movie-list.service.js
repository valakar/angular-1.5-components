class MovieListService {

    constructor($http) {
        this.$http = $http;
    }

    getMovies() {
        return this.$http.get('/api/movies.json')
            .then(response => response.data);
    }

}

export default MovieListService;
