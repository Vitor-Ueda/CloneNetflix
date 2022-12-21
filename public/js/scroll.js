const setupScrooling = () => {
    const container = [... document.querySelectorAll(".movie-container")];
    const nextBtn   = [... document.querySelectorAll(".next-btn")];
    const prevBtn   = [... document.querySelectorAll(".pre-btn")];

    container.forEach((element, i) => {
        let containerDimensions = element.getBoundingClientRect();
        let containerWidth      = containerDimensions.width;

        nextBtn[i].addEventListener("click", () => {
            element.scrollLeft += containerWidth;
        })

        prevBtn[i].addEventListener("click", () => {
            element.scrollLeft -= containerWidth;
        })
    });
};