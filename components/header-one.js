import React, { Fragment, useContext, useEffect, useState } from "react";
import { NavLinksData, TopbarInfos, FooterBottomData } from "@/data";
import Link from "@/components/link";
import Logo from "@/components/logo";
import { useRouter } from "next/router";
import { MenuContext } from "@/context/menu-context";

const HeaderOne = () => {
  const router = useRouter();
  const [sticky, setSticky] = useState(false);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
    
    // Toggle body overflow for mobile menu
    if (typeof window !== 'undefined') {
      document.body.classList.toggle('mobile-menu-open', !menuStatus);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <Fragment>
      <header className="header_area">
        <div className="container">
          <div className="header_social">
            <ul className="hd_social_icons">
              {FooterBottomData.social.map(({ icon, url }, index) => (
                <li key={`header-social-${index}`}>
                  <a href={url}>
                    <i className={`fa ${icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="header_contact text-end">
            <ul className="hd_contact">
              {TopbarInfos.map(({ icon, tagLine, text, url }, index) => (
                <li key={`header-info-${index}`}>
                  <i className={icon}></i> {tagLine}
                  <a href={url}> {text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <div
        className={`main_menu_area ${
          true === sticky
            ? " stricky stricky-fixed slideInDown animated"
            : " stricky slideIn animated"
        }`}
      >
        <div className="container">
          <div className="main_menu_area__left">
            <Logo size="default" />
            <button 
              className={`mobile-menu__toggler ${menuStatus ? 'active' : ''}`}
              onClick={handleMenuClick}
              aria-label="Toggle mobile menu"
              aria-expanded={menuStatus}
            >
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </button>
          </div>
          <div className="main_menu_area__right">
            <nav className="main_menu_area__menu">
              <ul className="nav navbar-nav navigation-box">
                {NavLinksData.map((links, index) => {
                  return (
                    <li
                      key={index}
                      className={router.pathname == links.url ? "active" : ""}
                    >
                      <Link href={links.url}>{links.name}</Link>
                      {undefined !== links.subItems ? (
                        <ul className="sub-menu">
                          {links.subItems.map((subLinks, index) => (
                            <li key={index}>
                              <Link href={subLinks.url}>{subLinks.name}</Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="header-actions">
              <Link href="/contact" className="btn-yellow btn-modern">
                <span>Get Quote</span>
                <i className="fa fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderOne;
