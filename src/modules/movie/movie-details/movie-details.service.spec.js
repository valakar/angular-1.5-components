import MovieDetailsService from './movie-details.service.js';

describe('The movie details service', () => {
    let sut,
        $http,
        $q,
        $timeout;

    let deferred;

    beforeEach(() => {
        $http = {
            get: env.stub()
        };

        inject((_$q_, _$timeout_) => {
            $q = _$q_;
            $timeout = _$timeout_;
        });

        deferred = $q.defer();
        $http.get.returns(deferred.promise);

        sut = new MovieDetailsService($http);
    });

    context('get movie by id', () => {
        let movieId;

        beforeEach(() => {
            movieId = Math.random();
        });

        it('should fetch movie by id', () => {
            sut.getMovieById(movieId);
            $http.get.should.be.called;
        });

        it('should get correct movie', () => {
            let result;
            const movies = [{
                id: movieId
            }];

            sut.getMovieById(movieId)
                .then(response => {
                    result = response;
                });

            deferred.resolve({
                data: movies
            });
            $timeout.flush();

            result.should.equal(movies[0]);
        });
    });
});
