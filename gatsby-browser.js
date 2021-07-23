require("./src/css/style.css");

// eslint-disable-next-line no-unused-vars
const amplitudeEventTypes = {
  outboundLinkClick: 'outbound link click',
  pageView: 'page view'
}

// eslint-disable-next-line no-unused-vars
const amplitudeExcludePaths = []

/** The SideBarBtns class credits: https://pakjiddat.netlify.app/posts/adding-scroll-to-top-button-to-gatsby-website */
class ScrollToTop {
  initialize() {
    window.addEventListener("scroll", this.handleScroll);
    document
      .getElementById("scroll-top-container")
      .addEventListener("click", this.scrollToTop);
  }

  handleScroll() {
    const scroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    let image = document.getElementById("arrow-loop-svg");
    image.style.transform = "rotate(" + scroll / 8 + "deg)";
    const scrollContainer = document.getElementById("scroll-top-container");
    const header = document.getElementById("header");
    if (!scrollContainer) {
      return;
    }
    if (scroll > 300) {
      scrollContainer.classList.add("block");
      header.classList.add("lg:h-10", "shadow-xl");
      scrollContainer.classList.remove("hidden");
    } else {
      header.classList.remove("lg:h-10");
      scrollContainer.classList.add("hidden", "shadow-xl");
      scrollContainer.classList.remove("block");
    }
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
  }
}

const checkForAmplitudeEvent = () => {


  if (
    location &&
    typeof amplitudeExcludePaths !== `undefined` && amplitudeExcludePaths.some(rx => rx.test(location.pathname))
  ) {
    return;
  }

  const language = localStorage.getItem("gatsby-i18next-language")

  const eventProperties = {
    href: location.href,
    host: location.host,
    language,
    location: location ? location.pathname + location.search + location.hash : undefined
  }
  if (window.amplitude) {
    window.amplitude.getInstance().logEvent(amplitudeEventTypes.pageView, eventProperties)
  }

}

exports.onRouteUpdate = () => {
  if (document.getElementById("scroll-top-container")) {
    new ScrollToTop().initialize();
  }
  checkForAmplitudeEvent()
};
