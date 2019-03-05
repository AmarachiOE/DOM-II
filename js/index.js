// Your code goes here

// .addEventListener works on individual items not an array
// so extract items or use for loop



// BODY
const body = document.querySelector("body");
console.log(body);

body.addEventListener("click", function(event) {
  event.target.style.backgroundColor = "#EFE4F1";
});

body.addEventListener('dblclick', function(event){
    event.target.style.backgroundColor = 'white';
 });

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

for (let i = 0; i < images.length; i++){
    images[i].addEventListener("mouseover", function(event){
        event.target.style.opacity = 0.2;
    })

    images[i].addEventListener("mouseout", function(event){
        event.target.style.opacity = 1;
    })
}

// PARAGRAPHS
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

for (let i = 0; i < paragraphs.length; i++){
    paragraphs[i].addEventListener("click", function(event){
        alert(`You clicked ${event.target}`);
        //event.target.style.color = 'white';
        //event.target.style.backgroundColor = 'black';
        event.stopPropagation(); // nested in body
    })
}

// BIG HEADERS
const bigHeaders = document.querySelectorAll("h2");
console.log(bigHeaders);

for (let i = 0; i < bigHeaders.length; i++){
    bigHeaders[i].addEventListener("wheel", function(event){
        event.target.style.transform = "rotate(0.03turn)"
        event.target.style.color = "#EB5F47";

        //event.target.style.color = 'white';
        //event.target.style.backgroundColor = 'black';
        event.stopPropagation(); // nested in body
    })
}


    /*
FIRST IMAGE
const headerImg = document.querySelector(".intro img");
console.log(headerImg);

headerImg.addEventListener("mouseover", function(event) {
  event.target.style.opacity = 0.5;
});


3 CONTENT IMAGES
const contentImg = document.querySelectorAll("section img");
console.log(contentImg);

 


const container = document.querySelector('.container');
container.addEventListener('click', function(eventObject){
    console.log(`Event Target: ${eventObject.target}`);
    console.log(`Current Target: ${eventObject.currentTarget}`);
    eventObject.target.style.color = "red";
    eventObject.currentTarget.style.color = "red";
});

*/