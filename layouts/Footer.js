"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const Footer = ({ bg = true, margin = 160, footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 bg={bg} margin={margin} />;
    case 2:
      return <Footer2 bg={bg} margin={margin} />;
    case 3:
      return <Footer3 bg={bg} margin={margin} />;

    default:
      return <Footer1 bg={bg} margin={margin} />;
  }
};
export default Footer;

const Footer1 = ({ bg = true, margin = 160 }) => {
  const t = useTranslations();
  const params = useParams();
  const locale = params?.locale || "zh";

  return (
    <footer className={`${bg ? "mil-footer-with-bg" : ""} mil-p-${margin}-0 `}>
      <div className="container">
        <div className="row justify-content-between mil-mb-90">
          <div className="col-xl-3 col-lg-4 col-md-6 mil-mb-60">
            <Link href={`/${locale}`} className="mil-footer-logo mil-mb-30">
              <img src="/img/logo.png" alt="Plax" width={40} height={32} />
            </Link>
            <h5 className="mil-mb-30">{t("footer.company")}</h5>
            <p className="mil-text-m mil-soft mil-mb-30">
              {t("banner.subtitle")}
            </p>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-6 mil-mb-60">
            <h6 className="mil-mb-30">{t("nav.pages")}</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href={`/${locale}`}>{t("common.home")}</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href={`/${locale}/about`}>{t("common.about")}</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href={`/${locale}/contact`}>{t("common.contact")}</Link>
              </li>
            </ul>
          </div>

          <div className="col-xl-4 col-lg-3 col-md-6 mil-mb-60">
            <h6 className="mil-mb-30">{t("footer.contact.address")}</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-soft mil-mb-20">
                <i
                  className="fas fa-map-marker-alt"
                  style={{ marginRight: "8px" }}
                ></i>
                {t("footer.contact.beijing")}
              </li>
              <li className="mil-text-m mil-soft mil-mb-20">
                <i
                  className="fas fa-map-marker-alt"
                  style={{ marginRight: "8px" }}
                ></i>
                {t("footer.contact.chengdu")}
              </li>
              <li className="mil-text-m mil-soft mil-mb-20">
                <i
                  className="fas fa-map-marker-alt"
                  style={{ marginRight: "8px" }}
                ></i>
                {t("footer.contact.hongkong")}
              </li>
            </ul>
          </div>

          <div className="col-xl-2 col-lg-3 col-md-6 mil-mb-60">
            <h6 className="mil-mb-30">{t("footer.contact.phone")}</h6>
            <p
              className="mil-text-sm mil-soft mil-mb-20"
              style={{ whiteSpace: "nowrap" }}
            >
              <i className="fas fa-phone" style={{ marginRight: "8px" }}></i>
              {t("footer.contact.phoneNumber")}
            </p>
          </div>
        </div>

        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-12">
              <div className="mil-divider mil-mb-30"></div>
              <p className="mil-text-s mil-soft mil-text-center mil-mb-15">
                {t("footer.copyright")}
              </p>
              <p className="mil-text-xs mil-soft mil-text-center">
                <a href="https://beian.miit.gov.cn/" target="_blank">
                  {t("footer.icp")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
const Footer3 = ({ bg = true, margin = 160 }) => {
  const t = useTranslations();
  const params = useParams();
  const locale = params?.locale || "zh";

  return (
    <footer className="mil-footer-dark-2 mil-p-160-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <Link href={`/${locale}`} className="mil-footer-logo mil-mb-60">
              <img src="/img/logo.png" alt="Plax" width={28} height={32} />
            </Link>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60 mil-soft">{t("footer.company")}</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-pale mil-mb-15">
                {t("footer.contact.address")}
                <br />
                {t("footer.contact.beijing")}
                <br />
                {t("footer.contact.chengdu")}
                <br />
                {t("footer.contact.hongkong")}
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60 mil-soft">{t("nav.pages")}</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href={`/${locale}`}>{t("common.home")}</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href={`/${locale}/about`}>{t("common.about")}</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href={`/${locale}/contact`}>{t("common.contact")}</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-80">
            <h6 className="mil-mb-60 mil-soft">{t("footer.contact.phone")}</h6>
            <p className="mil-text-xs mil-pale mil-mb-15">
              {t("footer.contact.phoneNumber")}
            </p>
          </div>
        </div>
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-12">
              <p className="mil-text-s mil-pale mil-text-center">
                {t("footer.copyright")} <br />
                {t("footer.icp")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  const t = useTranslations();
  const params = useParams();
  const locale = params?.locale || "zh";

  return (
    <footer className="mil-footer-dark mil-p-160-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mil-mb-60 mil-footer-space-fix">
            <Link
              href={`/${locale}`}
              className="mil-footer-logo mil-logo-2 mil-mb-60"
            >
              <img src="/img/logo.png" alt="Plax" width={83} height={32} />
            </Link>
            <ul className="mil-footer-list mil-footer-list-2">
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href={`/${locale}`}>{t("common.home")}</Link>
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href={`/${locale}/about`}>{t("common.about")}</Link>
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href={`/${locale}/contact`}>{t("common.contact")}</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                {t("footer.contact.address")}
                <br />
                {t("footer.contact.beijing")}
                <br />
                {t("footer.contact.chengdu")}
                <br />
                {t("footer.contact.hongkong")}
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                {t("footer.contact.phoneNumber")}
              </li>
            </ul>
          </div>
        </div>
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-12">
              <p className="mil-text-s mil-dark-soft mil-text-center">
                {t("footer.copyright")} <br />
                {t("footer.icp")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
