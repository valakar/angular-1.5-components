class MovieDetailsController {
    constructor(MovieDetailsService) {
        this.MovieDetailsService = MovieDetailsService;
    }

    $routerOnActivate() {
        this.MovieDetailsService.getMovieById(1);
    }
}

export default MovieDetailsController;
