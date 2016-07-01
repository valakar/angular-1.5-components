import MovieListService from './movie-list.service.js';

describe('The movie list service', () => {
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
        $http.get.withArgs('/api/movies.json').returns(deferred.promise);

        sut = new MovieListService($http);
    });

    context('get movies', () => {
        it('should fetch movies', () => {
            sut.getMovies();
            $http.get.should.be.calledWith('/api/movies.json');
        });

        it('should get correct movies', () => {
            let result;
            const movies = [];

            sut.getMovies()
                .then(response => {
                    result = response;
                });

            deferred.resolve({
                data: movies
            });
            $timeout.flush();

            result.should.equal(movies);
        });
    });
});
