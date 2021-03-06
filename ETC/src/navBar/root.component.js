import React from 'react'
import { navigateToUrl } from 'single-spa'
const NavBar = () => (
	<nav>
		<div className="nav-wrapper">
			<a href="/" onClick={navigateToUrl} className="brand-logo">single-spa</a>
			<ul id="nav-mobile" className="right">
				<li><a href="/" onClick={navigateToUrl}>Home</a></li>
				<li><a href="/angularJS" onClick={navigateToUrl}>AngularJS</a></li>
				<li><a href="/angularApp1" onClick={navigateToUrl}>Angular 8</a></li>
			</ul>
		</div>
	</nav>
)
export default NavBar
