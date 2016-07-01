import MovieListController from './movie-list.controller.js';

describe('The movie list controller', () => {
    let sut,
        MovieListService,
        $q,
        $timeout;

    let deferred;
    
    beforeEach(() => {
        MovieListService = {
            getMovies: env.stub()
        };

        inject((_$q_, _$timeout_) => {
            $q = _$q_;
            $timeout = _$timeout_;
        });

        deferred = $q.defer();
        MovieListService.getMovies.returns(deferred.promise);

        sut = new MovieListController(MovieListService);
    });
    
    context('$onInit', () => {
        it('should get movies', () => {
            sut.$onInit();
            MovieListService.getMovies.should.be.called;
        });

        it('should set movies on the scope', () => {
            let result;
            const movies = [];

            sut.$onInit();

            deferred.resolve(movies);
            $timeout.flush();

            sut.movies.should.equal(movies);
        });
    });

    context('setRating', () => {
        it('should set rating of a movie', () => {
            const movie = {
                rating: Math.random()
            };
            const newValue = Math.random();

            sut.setRating(movie, newValue);

            movie.rating.should.be.equal(newValue);
        });
    });
    
    context('upRating', () => {
        it('should not increase rating of movie if more than max', () => {
            const movie = {
                rating: Math.random() + 5
            };
            const newValue = movie.rating;
            sut.upRating(movie);

            movie.rating.should.be.equal(newValue);
        });

        it('should increase rating of a movie', () => {
            const movie = {
                rating: Math.random()
            };
            const newValue = movie.rating + 1;
            sut.upRating(movie);

            movie.rating.should.be.equal(newValue);
        });
    });

    context('downRating', () => {
        it('should not decrease rating of movie if less than min', () => {
            const movie = {
                rating: Math.random()
            };
            const newValue = movie.rating;
            sut.downRating(movie);

            movie.rating.should.be.equal(newValue);
        });

        it('should decrease rating of a movie', () => {
            const movie = {
                rating: Math.random() + 1
            };
            const newValue = movie.rating - 1;
            sut.downRating(movie);

            movie.rating.should.be.equal(newValue);
        });
    });
});
