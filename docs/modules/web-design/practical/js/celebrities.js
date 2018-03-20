function search(letter) {
    var results = new Array();
    var searchLetterH = document.getElementById('search-letter');

    if (!letter || letter == '' || letter == 'ALL') {
        results = allCelebrities;
        searchLetterH.innerText = 'All Celebrities';
    } else {
        for (var i = 0; i < allCelebrities.length; i++) {
            if (allCelebrities[i].name.substring(0, 1).toLowerCase() == letter.toLowerCase()) {
                results.push(allCelebrities[i]);
            }
        }
        searchLetterH.innerText = 'Celebrities Starting With ' + letter;
    }
    var searchResults = document.getElementById('search-results');
    var resultHtml = '';
    if (results.length < 1) {
        resultHtml = 'No celebrities matched.';
    } else {
        for (var i = 0; i < results.length; i++) {
            resultHtml += results[i].boxHtml();
        }
    }
    searchResults.innerHTML = resultHtml;
}

search();

var celebSearchLinks = document.getElementById('celeb-search-links').getElementsByTagName('li');
for (var i = 0; i < celebSearchLinks.length; i++) {
    celebSearchLinks[i].addEventListener('click', function (e) {
        search(e.target.innerText);
    });
}
