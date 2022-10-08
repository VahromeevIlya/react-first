import background from '../../img/footer/footer-bg.jpg';
import logo from "../../img/logo.svg";
import widestudio from '../../img/footer/widestudio.svg';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__background-ibg">
				<picture>
					<img src={background} alt=""/>
				</picture>
			</div>
			<div className="footer__container">
				<div className="footer__grid">
					<div className="footer__top">
						<a href="/" className="footer__logo">
							<img src={logo} alt="Логотип"/>
						</a>
						<div className="footer__menu menu">
							<nav className="menu__body">
								<ul className="menu__list">
									<li className="menu-item"><a href="#about">Про нас</a></li>
									<li className="menu-item"><a href="#order">Заказать котельную</a></li>
									<li className="menu-item"><a href="#team">Команда</a></li>
									<li className="menu-item"><a href="#portfolio">Портфолио</a></li>
									<li className="menu-item"><a href="/">Контакты</a></li>
								</ul>
							</nav>
						</div>
						<div className="footer__actions">
							<a href="tel:8 (4922) 42-12-83" className="footer__phone"><span>
									8 (4922) 42-12-83
								</span></a>
							<button type="button" data-popup="#callback"  className="footer__callback _icon-phone-outline">
								<span>ПЕРЕЗВОНИТЕ МНЕ</span>
							</button>
						</div>
					</div>
					<div className="footer__bottom">
						<div className="footer__copy">
							© 2005-2022. Компния “Теза”. 600000, Россия, г. Владимир, ул 2-я Никольская д. 2/9.
						</div>
						<div className="footer__agreements">
							<a href="/" target="_blank" className="footer__agreement">Политика конфиденциальности</a>
							<a href="/" target="_blank" className="footer__agreement">Пользовательское соглашение</a>
						</div>
						<div className="footer__widestudio">
							<div className="footer__widestudio-logo">
								<img src={widestudio} alt=""/>
							</div>
							<div className="footer__widestudio-body">
								<p>Разработка сайта:</p>
								<a href="https://widestudio.ru/" target="_blank" rel="noreferrer">WideStudio</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;