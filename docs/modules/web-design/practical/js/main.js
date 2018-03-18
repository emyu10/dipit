//load new movie releases to the left side on index page
var indexNewMovieReleases = document.getElementById('new-movie-releases-display');
var newMovieReleasesTable = '<table>';
newMovieReleasesTable += '<tr>';
for (var i = 0; i < newMovies.length; i++) {
    var movieDiv = new MovieDiv(newMovies[i]);
    newMovieReleasesTable += '<td>' + movieDiv.thumbHtml() + '</td>';
    // movieDiv.setShowDetails();
}
newMovieReleasesTable += '</tr>';
newMovieReleasesTable += '</table>';
indexNewMovieReleases.innerHTML = newMovieReleasesTable;


//load movies releasing this week on right side of index page
setTimeout(function () {
    var indexReleasingThisWeek = document.getElementById('home-releasing-this-week');
    indexReleasingThisWeek.innerHTML = '';
    for (var i = 0; i < moviesReleasingThisWeek.length; i++) {
        var movieDiv = new MovieDiv(moviesReleasingThisWeek[i]);
        indexReleasingThisWeek.innerHTML += movieDiv.listItemHtml();
    }
}, 1000);

//load now showing movies on right side of index page
setTimeout(function () {
    var indexNowShowing = document.getElementById('home-now-showing');
    indexNowShowing.innerHTML = '';
    for (var i = 0; i < moviesNowShowing.length; i++) {
        var movieDiv = new MovieDiv(moviesNowShowing[i]);
        indexNowShowing.innerHTML += movieDiv.listItemHtml();
    }
}, 1000);
