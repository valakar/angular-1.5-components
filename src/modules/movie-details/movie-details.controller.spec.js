import MovieDetailsController from './movie-details.controller';

describe('The movie details controller', () => {
    let sut,
        MovieDetailsService;

    beforeEach(() => {
        MovieDetailsService = {
            getMovieById: env.stub()
        };

        sut = new MovieDetailsController(MovieDetailsService);
    });
    
    context('on router activate', () => {
        it('should get movie on router activate', () => {
            sut.$routerOnActivate();
            MovieDetailsService.getMovieById.should.be.called;
        });

        // it('should get correct movie', () => {
        //     sut.$routerOnActivate(1);
        //     sut.should.be.;
        // });
    });


});
