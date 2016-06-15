class MovieListService {

    constructor($http) {
        this.$http = $http;
    }

    getMovies() {
        return this.$http.get("/api/movies.json")
            .then(function(response) {
                return response.data;
            });
    }

}

export default MovieListService;
