import logo from "../../img/logo.svg";

function Header() {
	const phone = "8 (4922) 42-12-83";
	const links = [
		{ link: "#about", label: "Про нас" },
		{ link: "#order", label: "Заказать котельную" },
		{ link: "#team", label: "Команда" },
		{ link: "#portfolio", label: "Портфолио" },
		{ link: "/", label: "Контакты" },
	];
	const menu = links.map(({ link, label },index) => {
		return (
			<li key={index} className="menu-item">
				<a href={link}>{label}</a>
			</li>
		);
	});
	return (
		<header className="header" data-scroll="400">
			<div className="header__wrapper" data-lp>
				<div className="header__container">
					<div className="header__grid">
						<button type="button" className="icon-menu">
							<span></span>
						</button>
						<a href="/" className="header__logo">
							<img src={logo} alt="Логотип" />
						</a>
						<div className="header__menu menu">
							<nav
								className="menu__body"
								data-da=".menu-mobile-up__container,61.99875,first"
							>
								<ul className="menu__list">{menu}</ul>
							</nav>
						</div>
						<div className="header__actions">
							<a
								href="tel:{phone}"
								className="header__phone _icon-phone"
							>
								<span>{phone}</span>
							</a>
							<button
								type="button"
								data-popup="#callback"
								className="header__callback _icon-phone-outline"
								data-da=".menu-mobile-down__grid,47.99875,last"
							>
								<span>ПЕРЕЗВОНИТЕ МНЕ</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
