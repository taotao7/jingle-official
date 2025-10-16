"use client";
import { CallToAction2 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations();

  return (
    <PlaxLayout>
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
      {/* call to action */}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up">{t("aboutUs.section3.title")}</h2>
                <p className="mil-text-m mil-soft mil-mt-30">
                  {t("aboutUs.section3.description")}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="/img/home-2/icons/1.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">
                    {t("aboutUs.section3.part1Titel")}
                  </h5>
                  <p className="mil-text-m mil-soft mil-up">
                    {t("aboutUs.section3.part1Description")}
                  </p>
                </div>
              </div>
              <div className="col-xl-6 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="/img/home-2/icons/2.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">
                    {t("aboutUs.section3.part2Titel")}
                  </h5>
                  <p className="mil-text-m mil-soft mil-up">
                    {t("aboutUs.section3.part2Description")}
                  </p>
                </div>
              </div>
              <div className="col-xl-6 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="/img/home-2/icons/3.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-20 mil-up">
                    {t("aboutUs.section3.part3Titel")}
                  </h5>
                  <p className="mil-text-m mil-soft mil-up">
                    {t("aboutUs.section3.part3Description")}
                  </p>
                </div>
              </div>
              <div className="col-xl-6 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="/img/home-2/icons/4.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
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
      </div>
      {/* call to action end */}
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
      {/* team */}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-visible mil-image mil-p-160-130">
            <div className="row justify-content-center mil-text-center">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-light mil-up">{t("technology.cta")}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6 col-sm-6">
                <div className="mil-team-card mil-mb-30 mil-up">
                  <div className="mil-portrait mil-mb-30">
                    <img src="/img/about/team/1.png" alt="Team Member" />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6">
                <div className="mil-team-card mil-mb-30 mil-up">
                  <div className="mil-portrait mil-mb-30">
                    <img src="/img/about/team/2.jpg" alt="Team Member" />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6">
                <div className="mil-team-card mil-mb-30 mil-up">
                  <div className="mil-portrait mil-mb-30">
                    <img src="/img/about/team/3.jpg" alt="Team Member" />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6">
                <div className="mil-team-card mil-mb-30 mil-up">
                  <div className="mil-portrait mil-mb-30">
                    <img src="/img/about/team/pic4.jpg" alt="Team Member" />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6">
                <div className="mil-team-card mil-mb-30 mil-up">
                  <div className="mil-portrait mil-mb-30">
                    <img src="/img/about/team/pic5.jpg" alt="Team Member" />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6">
                <div className="mil-team-card mil-mb-30 mil-up">
                  <div className="mil-portrait mil-mb-30">
                    <img src="/img/about/team/pic6.JPG" alt="Team Member" />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6">
                <div className="mil-team-card mil-mb-30 mil-up">
                  <div className="mil-portrait mil-mb-30">
                    <img src="/img/about/team/pic7.JPG" alt="Team Member" />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6">
                <div className="mil-team-card mil-mb-30 mil-up">
                  <div className="mil-portrait mil-mb-30">
                    <img src="/img/about/team/pic8.JPG" alt="Team Member" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team end */}
      {/* technology impact */}
      <div className="mil-quote mil-p-160-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h2 className="mil-mb-30">{t("technology.title")}</h2>
              <p className="mil-text-m mil-soft mil-mb-60">
                {t("technology.description")}
              </p>
              <div className="row">
                <div className="col-xl-4">
                  <ul className="mil-list-2 mil-type-2 mil-mb-30">
                    <li>
                      <div className="mil-up">
                        <h5 className="mil-mb-15">
                          {t("technology.impact.redefine")}
                        </h5>
                        <p className="mil-text-m mil-soft">
                          {t("technology.impact.description")}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-4">
                  <ul className="mil-list-2 mil-type-2 mil-mb-30">
                    <li>
                      <div className="mil-up">
                        <h5 className="mil-mb-15">
                          {t("technology.impact.growth")}
                        </h5>
                        <p className="mil-text-m mil-soft">
                          {t("technology.impact.growthDesc")}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-4">
                  <ul className="mil-list-2 mil-type-2 mil-mb-30">
                    <li>
                      <div className="mil-up">
                        <h5 className="mil-mb-15">
                          {t("technology.impact.partner")}
                        </h5>
                        <p className="mil-text-m mil-soft">
                          {t("technology.impact.partnerDesc")}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* technology impact end */}
      {/* call to action */}
      <CallToAction2 />
      {/* call to action end */}
    </PlaxLayout>
  );
};
export default Page;
