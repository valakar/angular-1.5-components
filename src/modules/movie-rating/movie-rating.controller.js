class MovieListController {
    $onInit() {
        this.entries = this.buildEntries(this.value, this.max);
    }

    $onChanges() {
        this.entries = this.buildEntries(this.value, this.max);
    }

    buildEntries(value, max) {
        const entries = [];
        for (let i = 1; i <= max; i++) {
            const icon = i <= value ? 'glyphicon-star' : 'glyphicon-star-empty';
            entries.push(icon);
        }

        return entries;
    }
}

export default MovieListController;
