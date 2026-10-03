document.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(
        ".section, .experience-item, .education-card, .skill-item, .working-section, .contact-content"
    );

    const revealOnScroll = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
        revealOnScroll.observe(element);
    });

});