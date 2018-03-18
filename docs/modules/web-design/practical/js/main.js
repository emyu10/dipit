var indexNewMovieReleases = document.getElementById('new-movie-releases-display');

var newMovieReleasesTable = '<table>';
newMovieReleasesTable += '<tr>';
for (var i = 0; i < newMovies.length; i++) {
    var movieDiv = new MovieDiv(newMovies[i]);
    newMovieReleasesTable += '<td>' + movieDiv.html() + '</td>';
}
newMovieReleasesTable += '</tr>';
newMovieReleasesTable += '</table>';

indexNewMovieReleases.innerHTML = newMovieReleasesTable;
