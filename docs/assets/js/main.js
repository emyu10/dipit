var app = new Object();

window.addEventListener('load', function() {
    app.navbar = document.getElementById('navbar');
    app.sidebar = document.getElementById('sidebar');
    app.sidebarLinks = document.getElementById('sidebar-links');
    app.sidebarContent = document.getElementById('sidebar-content');
    app.loadedModule = '';
    app.mainContent = document.getElementById('main-content');
    loadNavLinks();
}, false);

function loadNavLinks() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(event) {
        var jr = JSON.parse(event.target.responseText);
        for (i = 0; i < jr.length; i++) {
            var navLink = document.createElement('a');
            navLink.innerText = jr[i].title;
            navLink.href = jr[i].link;
            navLink.setAttribute('data-load-into', jr[i].loadInto);
            if (app.navbar.innerText == 'loading...') {
                app.navbar.innerText = '';
            }
            app.navbar.appendChild(navLink);

            //now to load the sidebar links
            if (typeof jr[i].sidebarLinks != 'undefined' && jr[i].sidebarLinks.length > 0) {
                for (j = 0; j < jr[i].sidebarLinks.length; j++) {
                    var sidebarLinkLi = document.createElement('li');
                    var sidebarLinkA = document.createElement('a');
                    var linkInfo = jr[i].sidebarLinks[j];
                    sidebarLinkA.innerText = linkInfo.title;
                    sidebarLinkA.href = linkInfo.link;
                    sidebarLinkA.setAttribute('data-load-into', linkInfo.loadInto);
                    sidebarLinkLi.innerHTML = sidebarLinkA.outerHTML;
                    app.sidebarLinks.appendChild(sidebarLinkLi);
                }
            }
        }

    }, false);
    xhr.addEventListener('error', function(event) {
        app.navbar.innerHTML = 'Error loading the navbar';
    });
    xhr.open('GET', 'assets/json/navlinks.json');
    xhr.send();
}

function loadModule(mod) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(event) {
        app.mainContent.innerHTML = event.target.responseText;
    }, false);
    xhr.addEventListener('error', function(event) {
        app.mainContent.innerHTML = 'Error loading the requested module.';
    });
    xhr.open('GET', 'modules/' + mod.name + '/index.html');
    xhr.send();
}


var routes = {
	'/': function(){
		window.location.href = '/';
	},
	'/web-design': function(){
		loadModule({name: 'web-design'});
	}
};
var router = Router(routes);
router.init();
