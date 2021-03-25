const topSlider = () => {
        const sliderItems = document.querySelectorAll('.item');
        
        let slideIndex = 0,
            interval,
            slide = sliderItems[slideIndex];
            
            
        
        const nextSlide = () => {
            slide.style.display = 'block';
                    
        };

        const prevSlide = () => {
            slide.style.display = 'none';
              
        };
    
        const autoPlay = () => {
            prevSlide();
            slideIndex++;
            if (slideIndex >= sliderItems.length) {
                slideIndex = 0;
            }
            slide = sliderItems[slideIndex];
            nextSlide();
        };
        
        const runSlider = (time = 3000) => {
            interval = setInterval(autoPlay, time);
        };
        runSlider();
    
    

};
export default topSlider;