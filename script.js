// Common JS
$(".watch-control,.controls a,.iphone-btn").on("click", (e) => {
  e.preventDefault();
});

// End of Common JS

// Cube
let x = 0;
let y = 20;
let z = 0;
let bool = true;
let interval;

$(".top-x-control").on("click", () => {
  $(".cube").css(
    "transform",
    `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`
  );
});
$(".bottom-x-control").on("click", () => {
  $(".cube").css(
    "transform",
    `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`
  );
});
$(".left-y-control").on("click", () => {
  $(".cube").css(
    "transform",
    `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg)`
  );
});
$(".right-y-control").on("click", () => {
  $(".cube").css(
    "transform",
    `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg)`
  );
});
$(".top-z-control").on("click", () => {
  $(".cube").css(
    "transform",
    `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg)`
  );
});
$(".bottom-z-control").on("click", () => {
  $(".cube").css(
    "transform",
    `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg)`
  );
});

const playPause = () => {
  if (bool) {
    interval = setInterval(() => {
      $(".cube").css(
        "transform",
        `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
      );
    }, 100);
  } else {
    clearInterval(interval);
  }
};

playPause();

$(".controls").on("mouseover", () => {
  bool = false;
  playPause();
});

$(".controls").on("mouseout", () => {
  bool = true;
  playPause();
});

// End of Cube

// Slideshow
const slideshowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = $("<div></div>");
    div.css("background-image", `url(images/slideshow/section-1-bg-${i}.jpg)`);

    i === 1 && div.addClass("change");

    $(".slideshow").append(div);
  }
};

slideshowDivs();

let a = 1;

const slideshow = () => {
  setInterval(() => {
    a++;

    const div = $(".slideshow .change");
    div.removeClass("change");

    if (a < $(".slideshow div").length) {
      div.next().addClass("change");
    } else {
      $(".slideshow div").first().addClass("change");
      a = 1;
    }
  }, 20000);
};

slideshow();
// End of Slideshow

// Section 3
const section3Content = $(".section-3-content");
$(window).on("scroll", () => {
  if (
    window.pageYOffset + window.innerHeight >=
    section3Content.offset().top + section3Content.outerHeight() / 2
  ) {
    section3Content.addClass("change");
  }
});
// End of Section 3

// Section 4
let axisY = 0;
let axisX = 0;

const hideControl = () => {
  $(".watch-top-control").toggleClass(
    "hideControl",
    axisY === -280 ? true : false
  );
  $(".watch-bottom-control").toggleClass(
    "hideControl",
    axisY === 280 ? true : false
  );
  $(".watch-right-control").toggleClass(
    "hideControl",
    axisX === 280 ? true : false
  );
  $(".watch-left-control").toggleClass(
    "hideControl",
    axisX === -280 ? true : false
  );
};
$(".watch-top-control").on("click", () => {
  $(".watch-cases").css("margin-top", `${(axisY -= 70)}rem`);
  hideControl();
});
$(".watch-bottom-control").on("click", () => {
  $(".watch-cases").css("margin-top", `${(axisY += 70)}rem`);
  hideControl();
});
$(".watch-right-control").on("click", () => {
  $(".watch-bands").css("margin-right", `${(axisX += 70)}rem`);
  hideControl();
});
$(".watch-left-control").on("click", () => {
  $(".watch-bands").css("margin-right", `${(axisX -= 70)}rem`);
  hideControl();
});

// End of Section 4
