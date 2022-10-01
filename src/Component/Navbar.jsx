import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <>
      <Logo />

      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <div className="container1">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="30"
                      fill="currentColor"
                      className="bi bi-house-door-fill"
                      viewBox="0 0 16 10"
                    >
                      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                    </svg>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/4">
                    Nation
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/2">
                    South
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/3">
                    World
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/5">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/6">
                    Jobs & Education
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/7">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/8">
                    Technology
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/9">
                    Lifestyle
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/10">
                    Gallary
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More...
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/11">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/12">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      
    </>
  );
}
export default Navbar;
