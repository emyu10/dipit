function Movie(title, year, storyline, coverUrl) {
    this.title = title;
    this.year = year;
    this.cast = [];
    this.storyline = storyline;
    this.coverUrl = coverUrl;

    this.setCast = function (cast) {
        this.cast = cast;
    }

    this.addCast = function (cast) {
        this.cast.push(cast);
    }
}

function Celebrity(name, roles, bio, dob, photoUrl) {
    this.name = name;
    this.roles = roles;
    this.dob = new Date(dob);
    this.photoUrl = photoUrl;
}

function MovieDiv(movie) {
    this.movie = movie;
    this.showDetails = function () {
        alert('test');
    };
    this.html = function () {
        var html = '<div class="movie-box">';
        html += '<div class="image"><img src="' + this.movie.coverUrl + '" alt="' + this.movie.title + '"></div>';
        html += '<div class="title">' + this.movie.title + ' [' + this.movie.year + ']</div>';
        html += '</div>';
        return html;
    };
}
