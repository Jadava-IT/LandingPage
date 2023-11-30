import React, { useState, useEffect, lazy, Suspense } from "react";
import logo from "../asset/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, Link } from "react-router-dom";
const Drawer = lazy(() => import("@mui/material/Drawer"));


// const Modal = lazy(() => import("@mui/material/Modal"));

const navlinks = [
   {
    name: "Home",
    toUrl: "/",
  },
  {
    name: "About Us",
    toUrl: "/about",
  },
  {
    name: " Courses",
    toUrl: "/course",
  },
  {
    name: " Service",
    toUrl: "/service",
  },
  
  {
    name: " Contact Us",
    toUrl: "/contact",
  },

];
const NavBar = () => {
  const [menu, setMenu] = useState(false);



  const toggleDrawer = (anchor) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenu(anchor);
  };

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1));
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }, 200);
  }, [location]);
  // console.log(location);
  return (
    <nav className="NavBarTopContainer sticky top-0 z-[100]">
      <div className="flex items-center justify-between  NavBarSubContainer">
        <Link to="/" className="">
          <img src={logo} alt="Logo" className="Navbarlogo" loading="lazy" width="100%" height="100%"/>
        </Link>
        <ul className="Navbarul">
          {navlinks.map((data) => {
            return (
              <li className="Navbarlist">
                <Link to={data?.toUrl}>{data?.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex md:hidden gap-x-[18px] items-center">

          {/* Mobile View Started */}
          <div className="md:hidden">
            <div
              className="hambergerMenu"
              onClick={() => {
                setMenu(true);
              }}
            >
              <MenuIcon
                sx={{
                  color: "#0F0C0C",
                  width: "26px",
                  height: "24px",
                  cursor: "pointer",
                }}
              />
            </div>
            <Suspense fallback={<div>...</div>}>
              <Drawer
                anchor={"right"}
                open={menu}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    backgroundColor: "#0F0C0C",
                    boxShadow: "none",
                    width: "100%",
                  },
                }}
              >
                <div className="mobileNavbar">
                  <div className="ofmob">
                    <div className="hambergerMenu ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        className="cursor-pointer"
                        onClick={() => {
                          setMenu(false);
                        }}
                      >
                        <mask
                          id="mask0_317_5628"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="40"
                          height="40"
                        >
                          <rect width="40" height="40" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_317_5628)">
                          <path
                            d="M10.6668 31.6666L8.3335 29.3333L17.6668 19.9999L8.3335 10.6666L10.6668 8.33325L20.0002 17.6666L29.3335 8.33325L31.6668 10.6666L22.3335 19.9999L31.6668 29.3333L29.3335 31.6666L20.0002 22.3333L10.6668 31.6666Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <ul>
                    {navlinks.map((data) => {
                      return (
                        <li>
                          <Link
                            to={data?.toUrl}
                            onClick={() => {
                              setMenu(false);
                            }}
                          >
                            {data?.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Drawer>
            </Suspense>
          </div>
          {/* Mobile View End*/}
        </div>
      </div>

    </nav>
  );
};
export default NavBar;
