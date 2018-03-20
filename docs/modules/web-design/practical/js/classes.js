function Movie(title, year, storyline, coverUrl) {
    this.title = title;
    this.year = year;
    this.cast = [];
    this.storyline = storyline;
    this.coverUrl = coverUrl;

    this.setCast = function (cast) {
        this.cast = cast;
    };

    this.addCast = function (cast) {
        this.cast.push(cast);
    };

    this.thumbHtml = function () {
        var mov = {
            title: this.title,
            year: this.year,
            storyline: this.storyline,
            coverUrl: this.coverUrl
        };
        var html = '<div class="movie-box">';
        html += '<div class="image"><img src="' + this.coverUrl + '" alt="' + this.title + ' image"></div>';
        html += '<div class="title" onclick="displayMovieDetails(' + mov + ')">' + this.title + ' [' + this.year + ']</div>';
        html += '</div>';
        return html;
    };

    this.listItemHtml = function () {
        var html = '<div class="movie-list-item">';
        html += '<img src="' + this.coverUrl + '">';
        html += '<div>';
        html += '<p>' + this.title + '</p>';
        html += '<p>' + this.storyline.substring(0, 30) + ' ...</p>';
        html += '</div>';
        html += '</div>';
        return html;
    };
}

function Celebrity(name, bio, dob, photoUrl) {
    this.name = name;
    this.bio = bio;
    this.dob = new Date(dob);
    this.photoUrl = photoUrl;
}

function closeMovieDetails() {
    var detailsDiv = document.getElementById('movie-details');
    detailsDiv.style.display = 'none';
}

function displayMovieDetails(movie) {
    console.log(movie);
    // var detailsDiv = document.getElementById('movie-details');
    // var detailsTitleH = document.getElementById("movie-details-title");
    // var detailsCoverDiv = document.getElementById("movie-details-cover");
    // var detailsStoryLineP = document.getElementById("movie-details-storyline");
    // detailsTitleH.innerText = movie.title + ' [' + movie.year + ']';
    // detailsDiv.style.display = 'none';
}
