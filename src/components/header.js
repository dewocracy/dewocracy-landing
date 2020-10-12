import { Link } from "gatsby";
import React from "react";
import deWocracyWhite from "../images/dewocracy-white.png";
import Headroom from "react-headroom";

function Header() {
  // const [isExpanded, toggleExpansion] = useState(false);
  return (
    <Headroom wrapperStyle={{ position: "absolute" }}>
      <header className="flex flex-wrap items-center justify-between max-w-6xl p-6">
        <Link to="/">
          <h1 className="flex items-center no-underline">
            <figure className="w-32">
              <img alt="DeWocracy logo" src={deWocracyWhite} />
            </figure>
          </h1>
        </Link>
      </header>
    </Headroom>
  );
}

/**
 Use this whenever we are going to add more pages :)

 <button
 className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
 onClick={() => toggleExpansion(!isExpanded)}
 >
 <svg
 className="w-3 h-3 fill-current"
 viewBox="0 0 20 20"
 xmlns="http://www.w3.org/2000/svg"
 >
 <title>Menu</title>
 <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
 </svg>
 </button>

 <nav
 className={`${
              isExpanded ? `block` : `hidden`
            } md:block md:items-center w-full md:w-auto`}
 >
 {[
              {
                route: `/about`,
                title: `About`,
              },
              {
                route: `/contact`,
                title: `Contact`,
              },
            ].map((link) => (
              <Link
                className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
                key={link.title}
                to={link.route}
              >
                {link.title}
              </Link>
            ))}
 </nav>
 */

export default Header;
