var app = new Object();

window.addEventListener('load', function() {
    app.navbar = document.getElementById('navbar');
    loadNavLinks();
}, false);

function loadNavLinks() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(event) {
        console.log(event);
        app.navbar.innerHTML = 'Navbar loaded';
    }, false);
    xhr.addEventListener('error', function(event) {
        app.navbar.innerHTML = 'Error loading the navbar';
    });
    xhr.open('GET', 'assets/json/navlinks.json');
    xhr.send();
}
