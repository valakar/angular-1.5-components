import MovieListController from './movie-list.controller.js';

describe('The movie list controller', () => {
    let MovieListService, sut;

    beforeEach(() => {
        MovieListService = {
            getMovies: env.stub().returns({then: env.stub()})
        };

        sut = new MovieListController(MovieListService);
    });
    
    it('should get movies on init', () => {
        sut.$onInit();
        MovieListService.getMovies.should.be.called;
    });
});
