"use client";
import { CallToAction2 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations();

  return (
    <PlaxLayout>
      <style jsx>{`
        .mil-team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15) !important;
        }
        .mil-team-card img {
          transition: transform 0.3s ease;
        }
        .mil-team-card:hover img {
          transform: scale(1.05);
        }
        .mil-icon-box:hover {
          transform: translateY(-5px) scale(1.02);
        }
        .mil-icon-frame {
          transition: all 0.3s ease;
        }
        .mil-icon-box:hover .mil-icon-frame {
          transform: rotate(5deg) scale(1.1);
        }
      `}</style>
      <div className="mil-banner mil-banner-inner mil-dissolve">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8">
              <div className="mil-banner-text mil-text-center">
                <div className="mil-text-m mil-mb-20">
                  {t("aboutUs.section1.description")}
                </div>
                <h1 className="mil-mb-60">{t("aboutUs.section1.title")}</h1>
                {/* <ul className="mil-breadcrumbs mil-center">
                  <li>
                    <Link href="/">{t("common.home")}</Link>
                  </li>
                  <li>
                    <Link href="about">{t("common.about")}</Link>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* features */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
                {t("aboutUs.section2.title")}
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                {t("aboutUs.section2.description")}
              </p>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                {t("aboutUs.section2.content")}
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">{t("about.compliance")}</h5>
                    <p className="mil-text-m mil-soft">
                      {t("aboutUs.section2.contentFooter")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src="/img/about/1.png"
                  alt="Global Operations"
                  className="mil-scale-img"
                  data-value-1={1}
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* facts */}
      <div className="mil-facts mil-p-0-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number={8}>
                  8
                </span>
                <span className="mil-pale">+</span>
              </p>
              <h5>{t("homepage.battlefields")}</h5>
            </div>
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number={3000}>
                  3000
                </span>
                <span className="mil-pale">+</span>
              </p>
              <h5>{t("homepage.teammates")}</h5>
            </div>
            <div className="col-xl-4 mil-sm-text-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number={7}>
                  7
                </span>
                <span className="mil-pale"></span>
              </p>
              <h5>{t("homepage.globalBusiness")}</h5>
            </div>
          </div>
        </div>
      </div>
      {/* facts end */}
      {/* company culture */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row justify-content-center mil-text-center mil-mb-80">
            <div className="col-xl-8">
              <h2 className="mil-up mil-mb-30">{t("aboutUs.section3.title")}</h2>
              <p className="mil-text-m mil-soft mil-up">
                {t("aboutUs.section3.description")}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-icon-box" style={{
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                padding: "40px 30px",
                borderRadius: "15px",
                height: "100%",
                transition: "all 0.3s ease"
              }}>
                <div className="mil-icon-frame mil-mb-30 mil-up" style={{
                  width: "60px",
                  height: "60px",
                  background: "white",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
                }}>
                  <img
                    src="/img/home-2/icons/1.svg"
                    alt="icon"
                    style={{ width: "32px" }}
                  />
                </div>
                <h5 className="mil-mb-20 mil-up">
                  {t("aboutUs.section3.part1Titel")}
                </h5>
                <p className="mil-text-m mil-soft mil-up">
                  {t("aboutUs.section3.part1Description")}
                </p>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-icon-box" style={{
                background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
                padding: "40px 30px",
                borderRadius: "15px",
                height: "100%",
                transition: "all 0.3s ease"
              }}>
                <div className="mil-icon-frame mil-mb-30 mil-up" style={{
                  width: "60px",
                  height: "60px",
                  background: "white",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
                }}>
                  <img
                    src="/img/home-2/icons/2.svg"
                    alt="icon"
                    style={{ width: "32px" }}
                  />
                </div>
                <h5 className="mil-mb-20 mil-up">
                  {t("aboutUs.section3.part2Titel")}
                </h5>
                <p className="mil-text-m mil-soft mil-up">
                  {t("aboutUs.section3.part2Description")}
                </p>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-icon-box" style={{
                background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
                padding: "40px 30px",
                borderRadius: "15px",
                height: "100%",
                transition: "all 0.3s ease"
              }}>
                <div className="mil-icon-frame mil-mb-30 mil-up" style={{
                  width: "60px",
                  height: "60px",
                  background: "white",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
                }}>
                  <img
                    src="/img/home-2/icons/3.svg"
                    alt="icon"
                    style={{ width: "32px" }}
                  />
                </div>
                <h5 className="mil-mb-20 mil-up">
                  {t("aboutUs.section3.part3Titel")}
                </h5>
                <p className="mil-text-m mil-soft mil-up">
                  {t("aboutUs.section3.part3Description")}
                </p>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-icon-box" style={{
                background: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
                padding: "40px 30px",
                borderRadius: "15px",
                height: "100%",
                transition: "all 0.3s ease"
              }}>
                <div className="mil-icon-frame mil-mb-30 mil-up" style={{
                  width: "60px",
                  height: "60px",
                  background: "white",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
                }}>
                  <img
                    src="/img/home-2/icons/4.svg"
                    alt="icon"
                    style={{ width: "32px" }}
                  />
                </div>
                <h5 className="mil-mb-20 mil-up">
                  {t("aboutUs.section3.part4Titel")}
                </h5>
                <p className="mil-text-m mil-soft mil-up">
                  {t("aboutUs.section3.part4Description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* company culture end */}
      {/* about company */}
      <div className="mil-features mil-p-160-80">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-12 mil-mb-80">
              <h2 className="mil-mb-30 mil-up mil-text-center">
                {t("about.title")}
              </h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                {t("about.intro")}
              </p>
              <p className="mil-text-m mil-soft mil-mb-20 mil-up">
                {t("about.history")}
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <p className="mil-text-m mil-soft">
                      {t("about.milestones.2021")}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <p className="mil-text-m mil-soft">
                      {t("about.milestones.2022")}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <p className="mil-text-m mil-soft">
                      {t("about.milestones.2023")}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <p className="mil-text-m mil-soft">
                      {t("about.milestones.2025")}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <p className="mil-text-m mil-soft">
                      <strong>{t("about.milestones.futureYear")}</strong>{" "}
                      {t("about.milestones.future")}
                    </p>
                  </div>
                </li>
              </ul>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up mil-mt-60">
                {t("about.team")}
              </p>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                {t("about.closing")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* about company end */}
      {/* team gallery */}
      <div className="mil-team-gallery mil-p-160-130">
        <div className="container">
          <div className="row justify-content-center mil-text-center mil-mb-60">
            <div className="col-xl-8">
              <h2 className="mil-up mil-mb-30">{t("technology.cta")}</h2>
              <p className="mil-text-m mil-soft mil-up">
                {t("about.team")}
              </p>
            </div>
          </div>
          
          {/* Featured team photo */}
          <div className="row mil-mb-60">
            <div className="col-xl-12">
              <div className="mil-team-featured mil-up" style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 80px rgba(0,0,0,0.1)",
                position: "relative"
              }}>
                <img 
                  src="/img/about/team/0.jpg" 
                  alt="Team" 
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
          </div>

          {/* Team photo grid with overlap effect */}
          <div className="row">
            <div className="col-xl-4 col-md-6 mil-mb-30">
              <div className="mil-team-card mil-up" style={{
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                position: "relative"
              }}>
                <img 
                  src="/img/about/team/1.png" 
                  alt="Team Member"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mil-mb-30">
              <div className="mil-team-card mil-up" style={{
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease"
              }}>
                <img 
                  src="/img/about/team/2.jpg" 
                  alt="Team Member"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mil-mb-30">
              <div className="mil-team-card mil-up" style={{
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease"
              }}>
                <img 
                  src="/img/about/team/3.jpg" 
                  alt="Team Member"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mil-mb-30">
              <div className="mil-team-card mil-up" style={{
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease"
              }}>
                <img 
                  src="/img/about/team/pic4.jpg" 
                  alt="Team Member"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mil-mb-30">
              <div className="mil-team-card mil-up" style={{
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease"
              }}>
                <img 
                  src="/img/about/team/pic5.jpg" 
                  alt="Team Member"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mil-mb-30">
              <div className="mil-team-card mil-up" style={{
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease"
              }}>
                <img 
                  src="/img/about/team/pic6.JPG" 
                  alt="Team Member"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mil-mb-30">
              <div className="mil-team-card mil-up" style={{
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease"
              }}>
                <img 
                  src="/img/about/team/pic7.JPG" 
                  alt="Team Member"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team gallery end */}
    </PlaxLayout>
  );
};
export default Page;
