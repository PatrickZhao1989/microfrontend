import { registerApplication, start } from 'single-spa'

registerApplication(
	// Name of single-spa application, corresponds to the id tag in index.html
	'home',
	// Our loading function
	() => import('./src/home/home.app.js'),
	// Our activity function
	() => location.pathname === "" ||
		location.pathname === "/" ||
		location.pathname.startsWith('/home')
);
registerApplication(
	// Name of single-spa application, corresponds to the id tag in index.html
	'navBar',
	// Loading function
	() => import('./src/navBar/navBar.app.js').then(module => module.navBar),
	// Activity function
	() => true
);
registerApplication(
	// Name of single-spa application, corresponds to the id tag in index.html
	'angularJS',
	// L
	() => import('./src/angularJS/angularJS.app.js'),
	//
	() => pathPrefix('angularJS')
);

function pathPrefix(prefix) {
	return function (location) {
		return location.pathname.startsWith(prefix);
	}
}


