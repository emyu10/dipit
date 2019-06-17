//load new movie releases to the left side on index page
var indexNewMovieReleases = document.getElementById('new-movie-releases-display');
var newMovieReleasesTable = '<table>';
newMovieReleasesTable += '<tr>';
for (var i = 0; i < newMovies.length; i++) {
    newMovieReleasesTable += '<td style="width: 200px;">' + newMovies[i].thumbHtml() + '</td>';
}
newMovieReleasesTable += '</tr>';
newMovieReleasesTable += '</table>';
indexNewMovieReleases.innerHTML = newMovieReleasesTable;


//load movies releasing this week on right side of index page
setTimeout(function () {
    var indexReleasingThisWeek = document.getElementById('home-releasing-this-week');
    indexReleasingThisWeek.innerHTML = '';
    for (var i = 0; i < moviesReleasingThisWeek.length; i++) {
        indexReleasingThisWeek.innerHTML += moviesReleasingThisWeek[i].listItemHtml();
    }
}, 1000);

//load now showing movies on right side of index page
setTimeout(function () {
    var indexNowShowing = document.getElementById('home-now-showing');
    indexNowShowing.innerHTML = '';
    for (var i = 0; i < moviesNowShowing.length; i++) {
        indexNowShowing.innerHTML += moviesNowShowing[i].listItemHtml();
    }
}, 1000);
