const ratingEls = document.querySelectorAll(".rating");
const btnEl =document.getElementById("btn");
const containerEl = document.getElementById("container");

let currentRating="";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) =>{
        removeActive();
        currentRating= event.target.innerText || event.target.parentNode.innerText;     //for when click to rating showing it's innertext
        event.target.classList.add("active") || event.target.parentNode.classList.add("active"); //when clicked adding active in rating 
                                                                                                 //class
    });
});

//clicked on review button
btnEl.addEventListener("click",() =>{
    if(currentRating !== ""){
        containerEl.innerHTML = `
        <strong> Thank you! </strong>
        <br>
        <strong> Feedback: ${currentRating}</strong>
        <p>We will use your feedback ton improve our customer support.</p>
        `
    }
});

//function to remove the active when click other rating icon . 
function removeActive(){
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    });
}