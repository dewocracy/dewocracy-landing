require("./src/css/style.css");

/** The SideBarBtns class credits: https://pakjiddat.netlify.app/posts/adding-scroll-to-top-button-to-gatsby-website */
class ScrollToTop {
  Initialize() {
    window.addEventListener("scroll", this.ToggleButtons);
    document
      .getElementById("scroll-top-container")
      .addEventListener("click", this.ScrollToTop);
  }

  ToggleButtons() {
    const scroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const scrollContainer = document.getElementById("scroll-top-container");
    const header = document.getElementById("header");
    if (!scrollContainer) {
      return;
    }
    if (scroll > 300) {
      scrollContainer.classList.add("block");
      header.classList.add("h-10", "shadow-xl");
      scrollContainer.classList.remove("hidden");
    } else {
      header.classList.remove("h-10");
      scrollContainer.classList.add("hidden", "shadow-xl");
      scrollContainer.classList.remove("block");
    }
  }

  ScrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
  }
}

exports.onRouteUpdate = () => {
  if (document.getElementById("scroll-top-container")) {
    new ScrollToTop().Initialize();
  }
};
