// GASP Video Mask Scroll Animation
gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
      markers: false
  });

  // Sticky Circle Grow
  $(".sticky__circle__wrap").each(function(index) {
      let triggerElement = $(this);
      let targetElement = $(".sticky__circle__element");

      let tl = gsap.timeline({
          scrollTrigger: {
              trigger: triggerElement,
              // trigger element - viewport
              start: "15% bottom",
              end: "bottom bottom",
              scrub: 0.1
          }
      });
      tl.fromTo(
          targetElement, {
              width: "35em",
              height: "35em",
              borderRadius: "35em",
              duration: 1
          }, {
              width: "100vw",
             	height: "calc(100vh - 64px)",
              borderRadius: "0em",
              duration: 1
          }
      );
  });
