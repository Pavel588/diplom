class CarouselServices{
    constructor({
        main,
        wrap,
        next,
        prev,
        infinity = false,
        position = 0,
        slidesToShow = 3,
        responsive = [],
    
    }){
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;    

        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow),
            maxPosition: this.slides.length - this.slidesToShow,
        };
        this.responsive = responsive;
        
    }
    init(){

        this.addCustomClass();
        this.addStyle();
        
        if(this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
        if(this.responsive){
            this.responseInit();
        }
        
    }

    addCustomClass() {
        this.main.classList.add('custom-slider');
        this.wrap.classList.add('custom-slider__wrap');
        for ( const item of this.slides) {
            item.classList.add('custom-slider__item');
        }
    }
    
    addStyle() {
        let style = document.getElementById('sliderCarousel-style');
        if(!style){
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        }
        style.textContent = `
            .custom-slider {
                overflow: hidden !important;
            }
            .custom-slider__wrap {
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            .custom-slider__item {
                display: flex !important;
                align-items: center;
                justify-content: center;
                flex: 0 0 ${this.options.widthSlide}% !important;
                mergin: auto 0 !important;
            }

        `;

        document.head.appendChild(style);
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.options.maxPosition;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }
                
    

    nextSlider() {
        if (this.options.infinity || this.options.position < this.options.maxPosition) {
            ++this.options.position;
            if (this.options.position > this.options.maxPosition) {
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    
    }

    addArrow() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'default-arrow-left';
        this.next.className = 'default-arrow-right';

        this.main.appendChild(this.next);
        this.main.appendChild(this.prev);
        

        const style = document.createElement('style');
        style.textContent = `
            .default-arrow-left,
            .default-arrow-right {
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
            }
            .default-arrow-right {
                border-right-color: #19b5fe;
            }
            .default-arrow-right {
                border-left-color: #19b5fe;
            }
            .default-arrow-left:hover,
            .default-arrow-right:hover,
            .default-arrow-left:focus,
            .default-arrow-right:focus,{
                background: transparent;
                outline: transparent;
            }
        `;
        document.head.appendChild(style);
    }

    responseInit() {
        const slidesToShowDefault = this.slidesToShow;
        const allResponse = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allResponse);
        
        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if(widthWindow < maxResponse) {
                for(let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse[i]){
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                        this.addStyle();
                    } 
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                this.addStyle();
            }
        };
        checkResponse();

        window.addEventListener('resize', checkResponse);
    }
}

export default CarouselServices;