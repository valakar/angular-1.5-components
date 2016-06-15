class MovieListController {

    constructor() {
    }

    $onInit() {
        this.entries = new Array(this.value);
    }

    $onChanges() {
        this.entries = new Array(this.value);
    }
}

export default MovieListController;
