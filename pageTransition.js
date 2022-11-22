// Page Transition Script
console.log('Transition script start');

// Add JS delaye here (or just use existing jQuery one...)
// Default timeout = 750
$('.thumbnail').click(function(e) {
  e.preventDefault();
  setTimeout(function(url) { window.location = url }, 100000, this.href);
});

// Items that can be clicked
const workLink01 = document.getElementById("workLink01");
const workLink02 = document.getElementById("workLink02");

// Items that can transition
const workThumb01 = document.getElementById("workThumb01");
const workThumb02 = document.getElementById("workThumb02");

// Transition animation
function startTransition () {
  console.log('Transition started');
  workThumb02.classList.add("pageTransition");
  workLink02.classList.add("removeOverflowHidden");
  // document.body.classList.add("enableScroll");
};
// Fire the transition animation on click
workLink02.onclick = function() {
  startTransition ();
  console.log('Work link clicked');
};

console.log('Transition script end');


Add multiple functions
one general function, plus a seperate function for the specific image?

//


<script>

(function($){
	$(function(){
    // when click on slider link, adjust the scroll position to make current slider
    // be at center of screen.
  	$('.thumbnail').on('click', '.thumbnail__image', function(e){
    	var $this = $(this),
      	$container = $this.closest('.thumbnail'), // parent slider container
        containerHeight = $container.outerHeight(), // height of container
        containerPos = $container.offset(), // current container position
        pos = containerPos.top + (containerHeight/4); // position to be set when slider link is clicked

        //e.preventDefault();

        $('html, body').animate({scrollTop: pos},500);
    });
  });
})(jQuery);

</script>
