var Carousel = function (frameSelector, sliderSelector, slidesSelector, btnLeftSelector, btnRightSelector) {
    var leftPosition = 0;
    
    var frame = document.querySelector(frameSelector);
    
    var slides = document.querySelectorAll(slidesSelector);
        
    var slidesNumber = slides.length;
    
    var leftButton = document.querySelector(btnLeftSelector);
    
    var rightButton = document.querySelector(btnRightSelector);
    
    var slider = document.querySelector(sliderSelector);

    frame.classList.add('frame');

    slider.classList.add('slider');

    leftButton.addEventListener("click", function(){ 
        carousel.previous(); 
    });

    rightButton.addEventListener("click", function(){ 
        carousel.next(); 
    });
    
    var moveSlide = function (value)
    {    
        leftPosition += value*100;
        slider.style.left = leftPosition + '%';   
    };
    
    return {
        next: function() {
            if(leftPosition > (slidesNumber-1)*-100)
            {
                moveSlide(-1);
            }
            else
            {
                leftPosition = 0;
                slider.style.left = leftPosition + '%'; 
            }
        },
        previous: function() {
            if(leftPosition !== 0)
            {
                 moveSlide(1);
            }
            else
            {
                leftPosition = (slidesNumber-1)*-100;
                slider.style.left = leftPosition + '%';  
            }
        }
    };
};

var carousel = new Carousel('#frame', '#slider', '#slider .slide', '.left', '.right');