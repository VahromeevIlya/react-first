import { useState } from "react";

import Header from "../header/header";
import Footer from "../footer/footer";
import Fullscreen from "../fullscreen/fullscreen";
import About from "../about/about";

import "../../scss/style.scss";

function App() {
	const [isDesktop, setIsDesktop] = useState(true);
	let isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows()
			);
		},
	};
	let mobile;
	if (isMobile.any()) {
		mobile = false;
	} else {
		mobile = true;
	}
	//console.log(mobile);
	//setIsDesktop(mobile);
	//setIsDesktop('false');
	return (
		<div className="wrapper">
			<Header />
			<main className="page">
				<div className="menu-mobile-up">
					<div className="menu-mobile-up__container"></div>
				</div>
				<Fullscreen isDesktop={isDesktop} />
				<About />
			</main>
			<Footer />
			<div className="menu-mobile-down">
				<div className="menu-mobile-down__container">
					<div className="menu-mobile-down__grid">
						<a
							href="tel:8 (4922) 42-12-83"
							className="menu-mobile-down__phone"
						>
							8 (4922) 42-12-83
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default App;
