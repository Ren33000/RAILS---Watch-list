const initUpdateNavbarOnScroll = () => {
    const navbar = document.querySelector(".navbar-lewagon");
    console.log(navbar);
    if (navbar) {
        const pageBody = document.querySelector(".page-frame-body");
        pageBody.addEventListener("scroll", () => {
            if (pageBody.scrollTop >= window.innerHeight) {
                navbar.classList.add("navbar-lewagon-black");
            } else {
                navbar.classList.remove("navbar-lewagon-black");
            }
        });
    }
};

export { initUpdateNavbarOnScroll };