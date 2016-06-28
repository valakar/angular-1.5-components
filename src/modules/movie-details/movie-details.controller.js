class MovieDetailsController {
    constructor(MovieDetailsService) {
        this.MovieDetailsService = MovieDetailsService;
    }

    $routerOnActivate(next) {
        this.MovieDetailsService.getMovieById(next.params.id).then(movie => {
            this.movie = movie;
        });
    }
}

export default MovieDetailsController;
