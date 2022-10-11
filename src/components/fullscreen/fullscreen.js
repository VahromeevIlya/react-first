import background from '../../img/fullscreen/fullscreen-1.jpg';
import background2 from '../../img/fullscreen/fullscreen-2.jpg';


function Fullscreen() {
	return(
		<section class="fullscreen">
				<div class="fullscreen__slider swiper">
					<div class="fullscreen__swiper swiper-wrapper">
						<div class="fullscreen__slide swiper-slide">
							<div class="fullscreen__background-ibg">
								<img src={background} alt=""/>
							</div>
							<div class="fullscreen__container">
								<div class="fullscreen__body">
									<p>Мы <span>создаем тепло</span> в вашем доме <span>профессионально</span>
									</p>
									<a href="https://www.google.com/" target="_blank"  rel="noreferrer" class="button fullscreen__button">
										Получить расчет
									</a>
								</div>
							</div>
						</div>
						<div class="fullscreen__slide swiper-slide">
							<div class="fullscreen__background-ibg">
									<img class="swiper-lazy" data-src={background2} alt=""/>
							</div>
							<div class="fullscreen__container">
								<div class="fullscreen__body">
									<p>Мы создаем тепло в вашем доме профессионально
										Мы создаем тепло в вашем доме профессионально
									</p>
									<a href="https://www.youtube.com/" target="_blank" rel="noreferrer" class="button fullscreen__button">
										Получить расчет
									</a>
								</div>
							</div>
						</div>
						<div class="fullscreen__slide swiper-slide">
							<div class="fullscreen__background-ibg">
								<img class="swiper-lazy" data-src={background} alt=""/>
							</div>
							<div class="fullscreen__container">
								<div class="fullscreen__body">
									<p>Мы <span>создаем тепло</span> в вашем доме <span>профессионально</span>
									</p>
									<a href="https://www.google.com/" target="_blank" rel="noreferrer" class="button fullscreen__button">
										Получить расчет
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="controls">
						<div class="controls__container">
							<div class="controls__grid">
								<div class="swiper-pagination"></div>
								<div class="fraction">
									<span class="fraction__current">01</span>
									/
									<span class="fraction__total">2</span>
								</div>
								<div class="arrows">
									<button type="button" class="arrow arrow--prev _icon-arrow timer">
										<svg>
											<circle class="timer__background" cx="20" cy="20" r="19"></circle>
											<circle class="timer__progress" cx="20" cy="20" r="19"></circle>
										</svg>
									</button>
									<button type="button" class="arrow arrow--next _icon-arrow timer">
										<svg>
											<circle class="timer__background" cx="20" cy="20" r="19"></circle>
											<circle class="timer__progress" cx="20" cy="20" r="19"></circle>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="fullscreen__info">
					<div class="fullscreen__container">
						<div class="fullscreen__info-block">
							<div class="pulse-box">
								<svg class="pulse-svg" width="50" height="50" viewBox="0 0 50 50"
									xmlns="http://www.w3.org/2000/svg">
									<circle class="circle first-circle" cx="25" cy="25" r="25">
									</circle>
									<circle class="circle second-circle" cx="25" cy="25" r="25"></circle>
									<circle class="circle third-circle" cx="25" cy="25" r="25"></circle>
									<circle class="circle" fill="white" cx="25" cy="25" r="25">
									</circle>
								</svg>
							</div>
							<p>Мы страхуем каждый дом на первый год, вам не придется переживать за котельную и свой любимый дом
							</p>
						</div>
					</div>
				</div>
			</section>
	)
}

export default Fullscreen;