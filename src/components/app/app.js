import Header from "../header/header";
import Footer from "../footer/footer";
import Fullscreen from "../fullscreen/fullscreen";
import About from "../about/about";

import "../../scss/style.scss";

function App() {
	return (
		<div className="wrapper">
			<Header />
			<main className="page">
				<div class="menu-mobile-up">
					<div class="menu-mobile-up__container"></div>
				</div>
				<Fullscreen/>
				<About/>
			</main>
			<Footer />
			<div class="menu-mobile-down">
				<div class="menu-mobile-down__container">
					<div class="menu-mobile-down__grid">
						<a
							href="tel:8 (4922) 42-12-83"
							class="menu-mobile-down__phone"
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
