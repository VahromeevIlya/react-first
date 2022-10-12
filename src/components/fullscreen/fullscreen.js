import { useState,useEffect } from "react";
import { Navigation, Pagination, EffectFade, Autoplay, Lazy } from "swiper";
import { Swiper, SwiperSlide,useSwiper } from "swiper/react";

import background from "../../img/fullscreen/fullscreen-1.jpg";
import background2 from "../../img/fullscreen/fullscreen-2.jpg";

function Fullscreen(isDesktop) {
	const [arrowNextActive, setArrowNextActive] = useState('');
	const [arrowNextHovered, setArrowNextHovered] = useState('');
	const [total, setTotal] = useState('02');
	const [current, setCurrent] = useState('01');
	const [swiperInstance,setSwiperInstance] = useState(null);

	let clazzNextButton = 'arrow arrow--next _icon-arrow timer';
	if(arrowNextActive === 'animating') {
		clazzNextButton += ' animating';
	}
	if(arrowNextHovered === 'hovered') {
		clazzNextButton += ' hovered';
	}

	function formatFraction(number) {
		return number < 10 ? `0${number}` : number;
	}
	function autoplayStart(swiper) {
		swiper.params.autoplay.disableOnInteraction = false;
		swiper.params.autoplay.delay = 5000;
		swiper.autoplay.start();
		setArrowNextHovered('');
	}
	function autoplayStop(swiper) {
		swiper.autoplay.stop();
		setArrowNextHovered('hovered');
	}
	function handleSlideChange(swiper) {
		let currentSlide = formatFraction(++swiper.realIndex);
		setCurrent(currentSlide);
	}
	function updateCounter(swiper) {
		if(swiper.destroyed === true) return;
		const number = formatFraction(swiper.slides.length);
		setTotal(number);
	}

	return (
		<section className="fullscreen">
			<Swiper
				className="fullscreen__slider"
				modules={[Navigation, Pagination, EffectFade, Autoplay, Lazy]}
				effect="fade"
				fadeEffect={{ crossFade: true }}
				slidesPerView="auto"
				spaceBetween={30}
				speed={800}
				preloadImages={false}
				lazy={{ loadOnTransitionStart: true }}
				navigation={{
					nextEl: ".arrow--next",
					prevEl: ".arrow--prev",
				}}
				pagination={{
					el: ".swiper-pagination",
					type: "progressbar",
				}}
				breakpoints={{
					320: {
						allowTouchMove: true,
					},
					768: {
						allowTouchMove: false,
					},
				}}
				onInit={function() {
					setSwiperInstance(this);
					setArrowNextActive('animating');
					updateCounter(this);
					autoplayStart(this);
					
				}}
				onTransitionStart={() => setArrowNextActive('')}
				onTransitionEnd={() => setArrowNextActive('animating')}
				onSlideChange={function() {
					handleSlideChange(this);
				}}
				onTouchStart={function(){
					if(!isDesktop) {
						autoplayStop(this);
					}
				}}
				onTouchEnd={function(){
					if(!isDesktop) {
						autoplayStart(this);
					}
				}}
			>
				<SwiperSlide className="fullscreen__slide">
					<div className="fullscreen__background-ibg">
						<img src={background} alt="" />
					</div>
					<div className="fullscreen__container">
						<div className="fullscreen__body">
							<p>
								Мы <span>создаем тепло</span> в вашем доме{" "}
								<span>профессионально</span>
							</p>
							<a
								href="https://www.google.com/"
								target="_blank"
								rel="noreferrer"
								className="button fullscreen__button"
							>
								Получить расчет
							</a>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="fullscreen__slide">
					<div className="fullscreen__background-ibg">
						<img className="swiper-lazy" data-src={background2} alt="" />
					</div>
					<div className="fullscreen__container">
						<div className="fullscreen__body">
							<p>
								Мы создаем тепло в вашем доме профессионально Мы создаем
								тепло в вашем доме профессионально
							</p>
							<a
								href="https://www.youtube.com/"
								target="_blank"
								rel="noreferrer"
								className="button fullscreen__button"
							>
								Получить расчет
							</a>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="fullscreen__slide">
					<div className="fullscreen__background-ibg">
						<img className="swiper-lazy" data-src={background} alt="" />
					</div>
					<div className="fullscreen__container">
						<div className="fullscreen__body">
							<p>
								Мы <span>создаем тепло</span> в вашем доме{" "}
								<span>профессионально</span>
							</p>
							<a
								href="https://www.google.com/"
								target="_blank"
								rel="noreferrer"
								className="button fullscreen__button"
							>
								Получить расчет
							</a>
						</div>
					</div>
				</SwiperSlide>
				<div className="controls"
					onMouseEnter={() => {
						if(isDesktop) {
							autoplayStop(swiperInstance);
						}
						
					}}
					onMouseLeave={() => {
						if(isDesktop) {
							autoplayStart(swiperInstance);
						}
					}}
				>
					<div className="controls__container">
						<div className="controls__grid">
							<div className="swiper-pagination"></div>
							<div className="fraction">
								<span className="fraction__current">{current}</span>/
								<span className="fraction__total">{total}</span>
							</div>
							<div className="arrows">
								<button
									type="button"
									className="arrow arrow--prev _icon-arrow timer"
								>
									<svg>
										<circle
											className="timer__background"
											cx="20"
											cy="20"
											r="19"
										></circle>
										<circle
											className="timer__progress"
											cx="20"
											cy="20"
											r="19"
										></circle>
									</svg>
								</button>
								<button
									type="button"
									className={clazzNextButton}
								>
									<svg>
										<circle
											className="timer__background"
											cx="20"
											cy="20"
											r="19"
										></circle>
										<circle
											className="timer__progress"
											cx="20"
											cy="20"
											r="19"
										></circle>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</Swiper>
			<div className="fullscreen__info">
				<div className="fullscreen__container">
					<div className="fullscreen__info-block">
						<div className="pulse-box">
							<svg
								className="pulse-svg"
								width="50"
								height="50"
								viewBox="0 0 50 50"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									className="circle first-circle"
									cx="25"
									cy="25"
									r="25"
								></circle>
								<circle
									className="circle second-circle"
									cx="25"
									cy="25"
									r="25"
								></circle>
								<circle
									className="circle third-circle"
									cx="25"
									cy="25"
									r="25"
								></circle>
								<circle
									className="circle"
									fill="white"
									cx="25"
									cy="25"
									r="25"
								></circle>
							</svg>
						</div>
						<p>
							Мы страхуем каждый дом на первый год, вам не придется
							переживать за котельную и свой любимый дом
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Fullscreen;
