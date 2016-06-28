class MovieDetailsService {
    constructor($http) {
        this.$http = $http;
    }

    getMovieById(id) {
        return this.$http.get('/api/movies.json')
            .then(response => {
                return response.data.find(movie => movie.id === id)
            });
    }
}

export default MovieDetailsService;
