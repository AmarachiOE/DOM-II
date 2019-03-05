// Your code goes here

// .addEventListener works on individual items not an array
// so extract items or use for loop

// BODY
const body = document.querySelector("body");
console.log(body);

body.addEventListener("click", function(event) {
  event.target.style.backgroundColor = "#EFE4F1";
});

body.addEventListener("dblclick", function(event) {
  event.target.style.backgroundColor = "white";
});


// FUN BUS HEADER
const headerText = document.querySelector("h1");
console.log(headerText);

headerText.addEventListener("mousemove", function (event){
    event.target.style.fontFamily = 'Arial';
})

// NAVIGATION
const navBackground = document.querySelector(".main-navigation");
navBackground.addEventListener("click", function(event) {
  event.target.style.backgroundColor = "#C2B9B7";
  event.stopPropagation(); // nested in body
});

navBackground.addEventListener("dblclick", function(event) {
  event.target.style.backgroundColor = "#C2B9B7";
  event.stopPropagation(); // nested in body
});

const navItems = document.querySelectorAll("nav a");
console.log(navItems);

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("mouseenter", function(event) {
    event.target.style.transform = "scale(1.5)";
    event.target.style.color = "#EB5F47";
  });

  navItems[i].addEventListener("mouseleave", function(event) {
    event.target.style.transform = "scale(1)";
    event.target.style.color = "black";
  });

  navItems[i].addEventListener("click", function(event) {
    event.preventDefault();
  });
}

// IMAGES
const images = document.querySelectorAll("img");
console.log(images); // 4 images

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", function(event) {
    event.target.style.opacity = 0.2;
  });

  images[i].addEventListener("mouseout", function(event) {
    event.target.style.opacity = 1;
  });
}

// PARAGRAPHS
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener("select", function(event) {
    console.log(`You clicked ${event.target}`);
    //event.target.style.color = 'white';
    //event.target.style.backgroundColor = 'black';
    event.stopPropagation(); // nested in body
  });
}

// BIG HEADERS
const bigHeaders = document.querySelectorAll("h2");
console.log(bigHeaders);

for (let i = 0; i < bigHeaders.length; i++) {
  bigHeaders[i].addEventListener("wheel", function(event) {
    event.target.style.transform = "rotate(0.03turn)";
    event.target.style.color = "#EB5F47";

    //event.target.style.color = 'white';
    //event.target.style.backgroundColor = 'black';
    event.stopPropagation(); // nested in body
  });
}

// LARGE CONTENT SECTIONS

const sections = document.querySelectorAll("section");
console.log(sections);

for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener("click", function(event) {
    event.target.style.backgroundColor = "white";
    event.stopPropagation();
  });
}


// DESTINATION SECTION HEADERS
const destinations = document.querySelectorAll("h4");
console.log(destinations);

for (let i = 0; i < destinations.length; i++) {
  destinations[i].addEventListener("mousedown", function(event) {
    event.target.style.transform = "scale(1.5)";
    event.target.style.color = "#EB5F47";
    event.stopPropagation();
  });

  destinations[i].addEventListener("mouseup", function(event) {
    event.target.style.transform = "scale(1)";
    event.target.style.color = "black";
    event.stopPropagation();
  });
}

// BUTTON
const buttons = document.querySelectorAll(".btn");
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover", function(event) {
    TweenMax.to(".btn", 2, { x: 100});
  });
}


