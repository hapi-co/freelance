// Custom JS for Fixed Nav

  // DOM Elements
  var navFixed = document.getElementById("navFixed");
  var navLogo = document.getElementById("navLogoBox");
  var navScrollBlockShow = document.getElementById("navScrollBlockShow");
  var navScrollBlockHide = document.getElementById("navScrollBlockHide");
  var scrollBlock = document.getElementById("scrollBlock");
  var navFixedMenu = document.getElementById("navFixedMenu");
  // const navBoxMobile = document.getElementById("navBoxMobile");
  const menuIconLogo = document.getElementById("menuIconLogo");
  const menuCloseBtn = document.getElementById("menuCloseBtn");
  const fixedMenuNavIconMob = document.getElementById("fixedMenuNavIconMob");
  const fixedMenuCloseBtn = document.getElementById("fixedMenuCloseBtn");
  const navbarMobile = document.getElementById("navbarMobile");
  const navMobContact = document.getElementById("navMobContact");
  const navMobContact02 = document.getElementById("navMobContact02");
  const navbar = document.getElementById("navbar");

  // ScrollStopper Status
  var scrollStopperDiv = true;

  // Set custom initial nav classes
  window.onload = function (event) {
    navFixed.classList.add("navFixedInitial");
    navFixed.classList.remove("navFixedAnimIn");
    navFixed.classList.remove("navFixedAnimOut");
  };

  // Change position of mobile nav on click from absolute to fixed
  menuIconLogo.onclick = function() {
    // console.log("mobile nav logo tapped");
    document.body.classList.add("disableScroll");
    document.body.classList.remove("enableScroll");
  };
  fixedMenuNavIconMob.onclick = function() {
    // console.log("mobile nav logo tapped");
    document.body.classList.add("disableScroll");
    document.body.classList.remove("enableScroll");
    fixedMenuCloseBtn.classList.add("showFlex");
    fixedMenuCloseBtn.classList.remove("hide");
    navbarMobile.classList.add("navMobZTop");
    navbarMobile.classList.remove("navMobZBottom");
    navbar.classList.add("hide");
    navbar.classList.remove("showFlex");
  };

  // Change position of mobile nav on click from fixed to absolute
  menuCloseBtn.onclick = function() {
    // console.log("mobile nav close btn tapped");
    document.body.classList.remove("disableScroll");
    document.body.classList.add("enableScroll");
  };
  fixedMenuCloseBtn.onclick = function() {
    // console.log("mobile nav close btn tapped");
    document.body.classList.remove("disableScroll");
    document.body.classList.add("enableScroll");
    fixedMenuCloseBtn.classList.remove("showFlex");
    fixedMenuCloseBtn.classList.add("hide");
    navbarMobile.classList.remove("navMobZTop");
    navbarMobile.classList.add("navMobZBottom");
    navbar.classList.remove("hide");
    navbar.classList.add("showFlex");
  };

  // Close nav and scroll to anchor when contact button clicked in menu
  function navMobContactFunc () {
    console.log("contact02 pressed nav close button hidden");
    document.body.classList.remove("disableScroll");
    document.body.classList.add("enableScroll");
    fixedMenuCloseBtn.classList.remove("showFlex");
    fixedMenuCloseBtn.classList.add("hide");
    navbarMobile.classList.remove("navMobZTop");
    navbarMobile.classList.add("navMobZBottom");
    navbar.classList.remove("hide");
    navbar.classList.add("showFlex");
    console.log('Called js function');
  };

  navMobContact02.onclick = function() {
    navMobContactFunc ();
    console.log('Called function menu 01');
  };

  navMobContact.onclick = function() {
    navMobContactFunc ();
    console.log('Called function menu 02');
  };

  // Show scrollStopperDiv
  navScrollBlockShow.onmouseover = function() {
    scrollStopperDiv = true;
  };
  navFixedMenu.onmouseover = function() {
    scrollStopperDiv = true;
    scrollBlock.classList.add("showFlex");
    scrollBlock.classList.remove("hide");
  };

  // Hide scrollStopperDiv
  navScrollBlockShow.onmouseout = function() {
    hideScrollBlockFunc ();
    console.log('Hide scrollStopperDiv');
  };
  navScrollBlockHide.onmouseover = function() {
    hideScrollBlockFunc ();
    console.log('Hide scrollStopperDiv');
  };
// Call the function
  function hideScrollBlockFunc () {
    scrollStopperDiv = false;
    scrollBlock.classList.add("hide");
    scrollBlock.classList.remove("showFlex");
  };

  // Run scrolling listener/function on desktop only
  const mediaQuery = window.matchMedia('(min-width: 991px)')
  // Check if the media query is true
  if (mediaQuery.matches) {
    // Then trigger an alert
    // On Scroll Event show/hide NavBlocker depending on hover state
    window.onscroll = function (event) {
      if (scrollStopperDiv == true) {
      } else if (scrollStopperDiv == false) {
        navFixed.classList.add("navFixedAnimOut");
        navFixed.classList.remove("navFixedAnimIn");
        navLogo.classList.add("navLogoAnimIn");
        navLogo.classList.remove("navLogoAnimOut");
      }
    };
  }

  // On Nav Logo Hover Event
  const navLogoFixed = document.getElementById('navLogoFixed');
  navLogoFixed.addEventListener("mouseover", function(){
    navFixed.classList.add("navFixedAnimIn");
    navFixed.classList.remove("navFixedAnimOut");
    navLogo.classList.add("navLogoAnimOut");
    navLogo.classList.remove("navLogoAnimIn");
    scrollBlock.classList.add("showFlex");
    scrollBlock.classList.remove("hide");
  });
