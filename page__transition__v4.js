  console.clear();

  var root  = document.documentElement;
  var body  = document.body;
  var pages = document.querySelectorAll(".thumbfullscreen");
  // console.log(pages);
  // var tiles = document.querySelectorAll(".img__box");
  var tiles = document.querySelectorAll(".img__work");
  // console.log(tiles);

  for (var i = 0; i < tiles.length; i++) {
    addListeners(tiles[i], pages[i]);
  }

  function addListeners(tile, page) {
    // console.log("click event listener");

    tile.addEventListener("click", function() {
      animateHero(tile, page);
      console.log("tile clicked");
    });

  }

  function animateHero(fromHero, toHero) {

    var clone = fromHero.cloneNode(true);

    var from = calculatePosition(fromHero);
    var to = calculatePosition(toHero);

    TweenLite.set([fromHero, toHero], { visibility: "hidden" });
    TweenLite.set(clone, { position: "absolute", margin: 0 });

    body.appendChild(clone);

    var style = {
      x: to.left - from.left,
      y: to.top - from.top,
      width: to.width,
      height: to.height,
      autoRound: false,
      ease: Power1.easeOut,
      onComplete: onComplete
    };

    TweenLite.set(clone, from);
    TweenLite.to(clone, 0.3, style);

    function onComplete() {

      TweenLite.set(toHero, { visibility: "visible" });
      body.removeChild(clone);
    }
  }

  function calculatePosition(element) {

    var rect = element.getBoundingClientRect();
    // console.log(rect);

    var scrollTop  = window.pageYOffset || root.scrollTop  || body.scrollTop  || 0;
    var scrollLeft = window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

    var clientTop  = root.clientTop  || body.clientTop  || 0;
    var clientLeft = root.clientLeft || body.clientLeft || 0;

    return {
      top: Math.round(rect.top + scrollTop - clientTop),
      left: Math.round(rect.left + scrollLeft - clientLeft),
      height: rect.height,
      width: rect.width,
    };

  }
