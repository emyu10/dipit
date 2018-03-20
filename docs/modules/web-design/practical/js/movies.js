//load now showing movies in movies page
var nowShowing = document.getElementById('now-showing');
var nowShowingTable = '<table>';
nowShowingTable += '<tr>';
for (var i = 0; i < moviesNowShowing.length; i++) {
    nowShowingTable += '<td style="width: 200px;">' + moviesNowShowing[i].thumbHtml() + '</td>';
}
nowShowingTable += '</tr>';
nowShowingTable += '</table>';
nowShowing.innerHTML = nowShowingTable;

//load soon releasing in movies page
var releasingSoon = document.getElementById('releasing-soon');
var releasingSoonTable = '<table>';
releasingSoonTable += '<tr>';
for (var i = 0; i < moviesReleasingThisWeek.length; i++) {
    releasingSoonTable += '<td style="width: 200px;">' + moviesReleasingThisWeek[i].thumbHtml() + '</td>';
}
releasingSoonTable += '</tr>';
releasingSoonTable += '</table>';
releasingSoon.innerHTML = releasingSoonTable;


function search(letter) {
    //do the searching
    var searchLetterH = document.getElementById('search-letter');
    var results = new Array();
    if (!letter || letter == '') {
        results = allMovies;
        searchLetterH.innerText = 'All Movies';
    } else {
        for (var i = 0; i < allMovies.length; i++) {
            if (allMovies[i].title.substring(0, 1).toLowerCase() == letter.toLowerCase()) {
                results.push(allMovies[i]);
            }
        }
        searchLetterH.innerText = 'Movies Starting With Letter ' + letter;
    }

    //show the results
    var searchResults = document.getElementById('search-results');

    if (results.length < 1) {
        searchResults.innerHTML = '<p>Could not find any movie in that category.</p>';
        return false;
    }
    var searchResultsTable = '<table>';
    searchResultsTable += '<tr>';
    for (var i = 0; i < results.length || i%5 != 0; i++) {
        if (!results[i] || typeof results[i] == 'undefined') {
            searchResultsTable += '<td style="width: 200px;">&nbsp;</td>';
        } else {
            searchResultsTable += '<td style="width: 200px;">' + results[i].thumbHtml() + '</td>';
        }

        if (i%5 == 4) {
            searchResultsTable += '</tr><tr>';
        }
    }
    if (i%5 != 4) {
        searchResultsTable += '</tr>';
    }
    searchResultsTable += '</table>';
    searchResults.innerHTML = searchResultsTable;
}

var movieSearchLinks = document.getElementById('movie-search-links').getElementsByTagName('li');
for (var i = 0; i < movieSearchLinks.length; i++) {
    movieSearchLinks[i].addEventListener('click', function (e) {
        if (e.target.innerText == 'ALL') {
            search();
        } else {
            search(e.target.innerText);
        }
    });
}

search();
