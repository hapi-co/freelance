//References Slide JS script for slider component https://splidejs.com/
var splide = new Splide( '.splide' );
var bar    = splide.root.querySelector( '.my-slider-progress-bar' );

  // Update the bar width:
  splide.on( 'mounted move', function () {
    var end = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min( ( splide.index + 1 ) / end, 1 );
    bar.style.width = String( 100 * rate) + '%';
  } );

  splide.mount();

function slider1() {

let splides = $('.slider1');
for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
	new Splide( splides[ i ], {
  // Desktop on down
	perPage: 2.5,
	perMove: 1,
  focus: 0, // 0 = left and 'center' = center
  type: 'slide', // 'loop' or 'slide'
  gap: '2em', // space between slides
  arrows: 'slider', // 'slider' or false
  pagination: false, // 'slider' or false
  speed : 600, // transition speed in miliseconds
  dragAngleThreshold: 30, // default is 30
  autoWidth: false, // for cards with differing widths
  rewind : false, // go back to beginning when reach end
  rewindSpeed : 400,
  waitForTransition : false,
  updateOnMove : true,
  trimSpace: false, // true removes empty space from end of list
  ladyLoad: 'nearby', //enables/disables lazy load to save on image bandwidth
  breakpoints: {
		991: {
    	// Tablet
      perPage: 2,
      gap: '3vw',
		},
    767: {
    	// Mobile Landscape
      perPage: 1,
      gap: '3vw',
		},
    479: {
    	// Mobile Portrait
      perPage: 1,
      gap: '3vw',
		}
	}
} ).mount();
}

}
slider1();

// Move slider on scroll
  let running = false;
  document.addEventListener("mousewheel", function(event){
 	if (running == false) {
      running = true;
      if(event.wheelDeltaX >= 0){
        $('.splide__arrow--next').click();
      }else{
        $('.splide__arrow--prev').click();
      }
      setTimeout(() => {
      running = false;
      }, 1500);
    }
  });
