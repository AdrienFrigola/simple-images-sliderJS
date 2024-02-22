// Select all images with the class "slides"
const slides = document.querySelectorAll(".slides img");

// Initialize the slide index and interval ID
let slideIndex = 0;
let intervalId = null;

// Event listener for DOMContentLoaded to initialize the slider when content is loaded
document.addEventListener("DOMContentLoaded", initializeSlider);

// Function to initialize the slider
function initializeSlider(){
    // Check if there are slides
    if(slides.length > 0){
        // Add the "displaySlide" class to the first slide
        slides[slideIndex].classList.add("displaySlide");
        // Start the interval to move to the next slide every 5 seconds
        intervalId = setInterval(nextSlide, 5000);   
    }   
}

// Function to display a slide at the specified index
function showSlide(index){
    // If the index is greater than or equal to the number of slides, go back to the first slide
    if(index >= slides.length){
        slideIndex = 0;
    } else if(index < 0){ // If the index is less than zero, move to the last slide
        slideIndex = slides.length - 1;
    }

    // Remove the "displaySlide" class from all slides
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });

    // Add the "displaySlide" class to the current slide
    slides[slideIndex].classList.add("displaySlide");
}

// Function to move to the previous slide
function prevSlide(){
    // Stop the interval
    clearInterval(intervalId);
    // Decrement the slide index and display the corresponding slide
    slideIndex--;
    showSlide(slideIndex);
}

// Function to move to the next slide
function nextSlide(){
    // Increment the slide index and display the corresponding slide
    slideIndex++;
    showSlide(slideIndex);
    // Stop the current interval and start a new one
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
}
