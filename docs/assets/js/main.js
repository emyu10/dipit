var app = new Object();

window.addEventListener('load', function() {
    app.navbar = document.getElementById('navbar');
    app.sidebar = document.getElementById('sidebar');
    app.sidebarLinks = document.getElementById('sidebar-links');
    app.sidebarContent = document.getElementById('sidebar-content');
    app.loadedModule = '';
    loadNavLinks();
}, false);

function loadNavLinks() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(event) {
        console.log(event);
        var jr = JSON.parse(event.target.responseText);
        for (i = 0; i < jr.length; i++) {
            var navLink = document.createElement('a');
            navLink.innerText = jr[i].title;
            navLink.href = jr[i].link;
            if (app.navbar.innerText == 'loading...') {
                app.navbar.innerText = '';
            }
            app.navbar.appendChild(navLink);
        }

    }, false);
    xhr.addEventListener('error', function(event) {
        app.navbar.innerHTML = 'Error loading the navbar';
    });
    xhr.open('GET', 'assets/json/navlinks.json');
    xhr.send();
}
