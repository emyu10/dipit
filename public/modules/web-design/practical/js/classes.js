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
        html += '<div class="title">' + this.title + ' [' + this.year + ']</div>';
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
    this.boxHtml = function () {
        var html = '<div class="celeb-box">';
        html += '<div><img src="' + this.photoUrl + '"></div>';
        html += '<div class="details">';
        html += '<p>' + this.name + '</p>';
        html += '<p>Birthday: ' + this.dob.getDate() + '/' + this.dob.getMonth() + '/' + this.dob.getYear() + '</p>';
        html += '</div>';
        html += '</div>';
        return html;
    };
}
