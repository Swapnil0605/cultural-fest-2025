// Slideshow Images
const images = [
  'https://images.unsplash.com/photo-1503095396549-807759245b35?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWN0aW5nfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1524070915974-97838e0bbbf2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyb3VwJTIwc2luZ2luZ3xlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1688820661462-a44e4b2770e8?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1554881070-74595ca2b74c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMHNob3d8ZW58MHx8MHx8fDA%3D'
];

let current = 0;
const bg = document.querySelector(".background");

function changeBackground() {
  bg.style.backgroundImage = `url('${images[current]}')`;
  current = (current + 1) % images.length;
}

changeBackground(); // Show the first image immediately
setInterval(changeBackground, 3000); // Change every 5 seconds

// Confirmation Redirect
function confirmRedirect() {
  const confirmGo = confirm("You will be redirected to the Google Form to complete your registration. Continue?");
  if (confirmGo) {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfVJEldcD1d_bsijjIBrN4W_WIlfzQD3EwG6pJCpOlRXFdriw/viewform?usp=dialog", "_blank");
  }
}
