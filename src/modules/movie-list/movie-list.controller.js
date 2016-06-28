class MovieListController {
    constructor(MovieListService) {
        this.MovieListService = MovieListService;

        this.movies = [];
    }

    $onInit() {
        this.MovieListService.getMovies()
            .then(movies => {
                this.movies = movies;
            });
    }

    upRating(movie) {
        if (movie.rating < 5) {
            movie.rating += 1;
        }
    }

    downRating(movie) {
        if (movie.rating > 1) {
            movie.rating -= 1;
        }
    }
}

export default MovieListController;
