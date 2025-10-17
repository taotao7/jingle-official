"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const Banner = ({
  title,
  subTitle,
  img = "img/home-2/1.png",
  style = { maxWidth: "150%", transform: "translateX(10%)" },
  dark = false,
}) => {
  const t = useTranslations("banner");

  const resolvedTitle = title ?? t("title");
  const resolvedSubtitle = subTitle ?? t("subtitle");
  const params = useParams();
  const locale = params?.locale || "zh";
  return (
    <div className={`mil-banner mil-dissolve ${dark ? "mil-dark-2" : ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div
              className="mil-banner-text"
              style={{ position: "relative", zIndex: 10 }}
            >
              <h6 className="mil-text-gradient-2 mil-mb-20">
                {resolvedSubtitle}
              </h6>
              <h1
                className="mil-display mil-text-gradient-3 mil-mb-60"
                style={{
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  lineHeight: "1.2",
                  width: "100%",
                  maxWidth: "42vw",
                }}
              >
                {resolvedTitle}
              </h1>
              <div className="mil-buttons-frame">
                <Link
                  href={`${locale}/contact`}
                  className="mil-btn mil-md mil-add-arrow"
                >
                  {t("joinNow")}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div
              className="mil-banner-img"
              style={{ position: "relative", zIndex: 1 }}
            >
              <img src={img} alt="banner" style={style} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 1199px) {
          .mil-banner-text h1 {
            max-width: 100% !important;
            font-size: clamp(1.75rem, 4vw, 3rem) !important;
          }
          .mil-banner-text h6 {
            font-size: clamp(0.875rem, 2vw, 1rem);
          }
        }
        @media (max-width: 767px) {
          .mil-banner-text {
            text-align: center;
            margin-bottom: 2rem;
          }
          .mil-banner-img {
            text-align: center;
          }
          .mil-banner-img img {
            max-width: 100% !important;
            transform: translateX(0) !important;
          }
          .mil-buttons-frame {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};
export default Banner;

export const PageBanner = ({
  title = "More than a Platform, a Financial Revolution",
  pageName = "About us",
}) => {
  return (
    <div className="mil-banner mil-banner-inner mil-dissolve">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-8">
            <div className="mil-banner-text mil-text-center">
              <div className="mil-text-m mil-mb-20">{pageName}</div>
              <h1 className="mil-mb-60">{title}</h1>
              <ul className="mil-breadcrumbs mil-center">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <a href="#">{pageName}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
