"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";

const Header = ({ dark }) => {
  const currentPath = usePathname();
  const activeMenuFuntion = (value) =>
    value.some((el) => currentPath.includes(el)) ? "mil-active" : "";
  const [toggle, setToggle] = useState(false);
  const t = useTranslations();

  return (
    <div className={`mil-top-panel ${dark ? "mil-dark-2" : ""}`}>
      <div className="container">
        <Link href="/" className="mil-logo">
          <img
            src={dark ? "img/logo-light.png" : "img/logo.png"}
            alt="JingleWill"
            width={68}
            height={48}
          />
        </Link>
        <nav className={`mil-top-menu ${toggle ? "mil-active" : ""}`}>
          <ul>
            <li
              className={`${
                currentPath.includes("home") || currentPath == "/"
                  ? "mil-active"
                  : ""
              }`}
            >
              <Link href="/">{t("nav.home")}</Link>
            </li>
            <li className={`${activeMenuFuntion(["about"])}`}>
              <Link href="about">{t("nav.about")}</Link>
            </li>
            {/* <li className={`${activeMenuFuntion(["services"])}`}>
              <Link href="services">{t("nav.services")}</Link>
            </li> */}
            <li>
              <Link href="contact">{t("nav.contact")}</Link>
            </li>
          </ul>
        </nav>
        <div className="mil-menu-buttons">
          <div
            className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
