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
