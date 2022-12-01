  // Nav InteractionObserver - CaseStudy
  const navObserveCaseStudy = document.getElementById("navbar");
  const observerHeroCaseStudy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && mediaQuery.matches) {
        navObserveCaseStudy.classList.add("navCaseStudyFadeOut");
        navObserveCaseStudy.classList.remove("navCaseStudyFadeIn");
        console.log("case study hide nav div intersecting");
      } else {
        navObserveCaseStudy.classList.add("navCaseStudyFadeIn");
        navObserveCaseStudy.classList.remove("navCaseStudyFadeOut");
        // navObserveCaseStudy.classList.remove("hideNav2");
        console.log("case study hide nav div NOT intersecting");
      }
    })
  })
  observerHeroCaseStudy.observe(document.getElementById("hideNav"));

// Show/hide nav when it's X away from top of page
  // **CASE STUDIES ONLY** // 
  var windowHeight = $(window).height();
  console.log(windowHeight);
  $(window).scroll(function() {
    if ($(this).scrollTop() >= windowHeight) {
      console.log("more than VH");
      $('.nav__fixed__scroll').css("display", "block");
    } else {
      console.log("less than VH");
      $('.nav__fixed__scroll').css("display", "none");
    }
});