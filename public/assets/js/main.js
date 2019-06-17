var app = new Object();
var routes = {
	'/': function(){
		window.location.href = '/';
	},
	'/:m': function(m){
		loadModule(m);
	},
    '/:m/:s': function(m, s) {
        loadModule(m, s);
    }
};
var router = Router(routes);

window.addEventListener('load', function() {
    app.navbar = document.getElementById('navbar');
    app.sidebar = document.getElementById('sidebar');
    app.sidebarLinks = document.getElementById('sidebar-links');
    app.sidebarContent = document.getElementById('sidebar-content');
    app.navLinks = [];
    app.sideNavLinks = [];
    app.loadedModule = '';
    app.loadedSubModule = '';
    app.mainContent = document.getElementById('main-content');
    loadNavLinks();
}, false);

function loadNavLinks() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function(event) {
        var jr = JSON.parse(event.target.responseText);
        for (i = 0; i < jr.length; i++) {
            var jrLink = jr[i];
            var navLink = document.createElement('a');
            app.navLinks.push(jrLink);
            navLink.innerText = jrLink.title;
            navLink.href = jrLink.link;
            if (jrLink.loadInto != 'page') {
                navLink.setAttribute('target', '_blank');
            }
            if (app.navbar.innerText == 'loading...') {
                app.navbar.innerText = '';
            }
            app.navbar.appendChild(navLink);
        }
        router.init();
    }, false);
    xhr.addEventListener('error', function(event) {
        app.navbar.innerHTML = 'Error loading the navbar';
    });
    xhr.open('GET', 'assets/json/navlinks.json');
    xhr.send();
}

function loadModule(mod, submod) {
    if (typeof app.navLinks != 'undefined' && app.navLinks.length > 0) {
        for (i = 0; i < app.navLinks.length; i++) {
            if (mod == app.navLinks[i].id) {
                app.loadedModule = app.navLinks[i];
            }
        }

        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function(event) {
            app.mainContent.innerHTML = event.target.responseText;
            loadSidebarLinks();
            if (typeof submod != 'undefined' && submod != '') {
                loadSubModule(submod);
            }
        }, false);
        xhr.addEventListener('error', function(event) {
            app.mainContent.innerHTML = 'Error loading the requested module.';
        });
        xhr.open('GET', 'modules/' + app.loadedModule.id + '/index.html');
        xhr.send();
    } else {
        app.mainContent.innerHTML = '404 Module Not Found.';
    }
}

function loadSubModule(submod) {
    if (typeof app.sideNavLinks != 'undefined' && app.sideNavLinks.length > 0) {
        for (i = 0; i < app.sideNavLinks.length; i++) {
            if (submod == app.sideNavLinks[i].id) {
                app.loadedSubModule = app.sideNavLinks[i];
            }
        }
        var url = 'modules/' + app.loadedModule.id + '/' + app.loadedSubModule.id + '.html';
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function(event) {
            app.mainContent.innerHTML = event.target.responseText;
        }, false);
        xhr.addEventListener('error', function(event) {
            app.mainContent.innerHTML = 'Error loading the requested page.';
        });
        xhr.open('GET', url);
        xhr.send();
    } else {
        app.mainContent.innerHTML = '404 Page Not Found';
    }
}

function loadSidebarLinks() {
    if (typeof app.loadedModule != 'undefined' && typeof app.loadedModule.sidebarLinks != 'undefined') {
        var links = app.loadedModule.sidebarLinks;
        for (i = 0; i < links.length; i++) {
            var sblo = links[i]; //sidebar link object
            app.sideNavLinks.push(sblo);
            var sidebarLinkLi = document.createElement('li');
            var sidebarLinkA = document.createElement('a');
            sidebarLinkA.innerText = sblo.title;
            sidebarLinkA.href = sblo.link;
            if (sblo.loadInto != 'page') {
                sidebarLinkA.setAttribute('target', '_blank');
            }
            sidebarLinkLi.innerHTML = sidebarLinkA.outerHTML;
            if (!app.loadedModule.sidebarLinksLoaded) {
                app.sidebarLinks.appendChild(sidebarLinkLi);
            }
        }
        app.loadedModule.sidebarLinksLoaded = true;
    } else {
        console.log('no sidebar links');
    }
}
