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

function MovieDiv(mov) {
    var movie = mov;

    var image = document.createElement('img');
    image.setAttribute('src', movie.coverUrl);
    image.setAttribute('alt', movie.title + ' image');

    var imageDiv = document.createElement('div');
    imageDiv.setAttribute('class', 'image');
    imageDiv.appendChild(image);

    var titleDiv = document.createElement('div');
    titleDiv.setAttribute('class', 'title');
    titleDiv.innerHTML = movie.title + ' [' + movie.year + ']';

    var movieBox = document.createElement('div');
    movieBox.setAttribute('class', 'movie-box');
    movieBox.appendChild(imageDiv);
    movieBox.appendChild(titleDiv);
    /*
    <div class="movie-list-item">
        <img src="images/movies/Vafaatheri_Kehiveriyaa.png">
        <div>
            <p>Vafaatheri Kehiveriyaa</p>
            <p>some text ...</p>
        </div>
    </div>
    */

    var titleP = document.createElement('p');
    titleP.innerHTML = movie.title;

    var summaryP = document.createElement('p');
    summaryP.innerHTML = movie.storyline.substring(0, 30) + ' ...';

    var detailsDiv = document.createElement('div');
    detailsDiv.appendChild(titleP);
    detailsDiv.appendChild(summaryP);

    var listImage = document.createElement('img');
    listImage.setAttribute('src', movie.coverUrl);
    listImage.setAttribute('alt', movie.title + ' image');

    var listItemDiv = document.createElement('div');
    listItemDiv.setAttribute('class', 'movie-list-item');
    listItemDiv.appendChild(listImage);
    listItemDiv.appendChild(detailsDiv);

    this.thumbHtml = function () {
        return movieBox.outerHTML;
    };

    this.listItemHtml = function () {
        return listItemDiv.outerHTML;
    }
}
