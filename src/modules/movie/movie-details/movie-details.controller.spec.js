import MovieDetailsController from './movie-details.controller.js';

describe('The movie details controller', () => {
    let sut,
        MovieDetailsService,
        $q,
        $timeout;

    let movie,
        next,
        deferred;

    beforeEach(() => {
        movie = {};
        next = {
            params: {
                id: Math.random()
            }
        };

        MovieDetailsService = {
            getMovieById: env.stub()
        };

        inject((_$q_,
                _$timeout_) => {
            $q = _$q_;
            $timeout = _$timeout_;
        });

        deferred = $q.defer();
        MovieDetailsService.getMovieById.returns().returns(deferred.promise);

        sut = new MovieDetailsController(MovieDetailsService);
    });

    context('on router activate', () => {
        it('should get movie on router activate', () => {
            sut.$routerOnActivate(next);
            MovieDetailsService.getMovieById.should.be.called;
        });

        it('should get correct movie', () => {
            const movie = {};
            let result;

            sut.$routerOnActivate(next);
            deferred.resolve(movie);
            $timeout.flush();

            sut.movie.should.be.movie;
        });
    });


});
