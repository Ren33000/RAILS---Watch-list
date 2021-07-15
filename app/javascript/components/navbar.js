const initUpdateNavbarOnScroll = () => {
    const navbar = document.querySelector(".navbar-lewagon");
    console.log(navbar);
    if (navbar) {
        console.log(window.scrollY, window.innerHeight);
        window.addEventListener("scroll", () => {
            console.log(window.scrollY, window.innerHeight);

            if (window.scrollY >= window.innerHeight) {
                navbar.classList.add("navbar-lewagon-black");
            } else {
                navbar.classList.remove("navbar-lewagon-black");
            }
        });
    }
};

export { initUpdateNavbarOnScroll };