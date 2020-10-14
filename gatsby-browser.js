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
    if (scroll > 300) {
      document.getElementById("scroll-top-container").classList.add("block");
      document
        .getElementById("scroll-top-container")
        .classList.remove("hidden");
    } else {
      document.getElementById("scroll-top-container").classList.add("hidden");
      document.getElementById("scroll-top-container").classList.remove("block");
    }
  }

  /** When the user clicks on the button, scroll to the top of the document */
  ScrollToTop() {
    /** The user is scrolled to the top of the page */
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
  }
}

exports.onRouteUpdate = () => {
  /** If the current page is an article page */
  if (document.getElementById("scroll-top-container")) {
    new ScrollToTop().Initialize();
  }
};
