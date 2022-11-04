// console.log("Just testing");
// console.log(movieListArrow)
// const movieListItems = document.querySelectorAll(".movie-list-item");
// console.log(movieListItems)

const movieList = document.querySelector(".movie-list");
const movieNumber = movieList.querySelectorAll("img").length;
let clickCounter = 0;

const movieListArrow = document.querySelector(".movie-list-arrow");

movieListArrow.addEventListener("click", () => {
    console.log("Clicked");
    clickCounter++;
    if (clickCounter <= movieNumber - 4) {
        movieList.style.transform = `translateX(${movieList.computedStyleMap().get("transform")[0].x.value - 310
            }px)`;
    } else {
        movieList.style.transform = "translateX(0)";
        clickCounter = 0;
    }
});

const toggle = document.querySelector(".toggle");
const classes = document.querySelectorAll(
    ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.toggle-ball"
);

toggle.addEventListener("click", () => {
    classes.forEach(item => {
        item.classList.toggle("active");
    })
})

