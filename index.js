// const images = document.querySelectorAll('.header-slideshow__image');

// let timer = setInterval(cycleImage, 4000);

// // Will always stay the same
// const length = images.length;
// // Will increment by one everytime the function is called
// let imageCounter = images.length;

// const cycleImage = () => {
//   // the new item in the array shown
//   let newIndex = imageCounter % length;
//   // the previous item in the array
//   let lastIndex = 0;

//   newIndex === 0 ? (lastIndex = length - 1) : (lastIndex = newIndex - 1);

//   // the item before lastIndex
//   // moves it back to rest on the right side
//   let moveIndexRight = 0;
//   lastIndex === 0
//     ? (moveIndexRight = length - 1)
//     : (moveIndexRight = lastIndex - 1);
//   images[newIndex].classList.add('slideshow-img');

//   images[lastIndex].classList.remove('slideshow-img');

//   images[lastIndex].classList.add('slideshow-left');

//   images[moveIndexRight].classList.remove('slideshow-left');

//   imageCounter++;
// };
