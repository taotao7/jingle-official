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
        .mil-team-featured {
          border-radius: 40px;
          overflow: hidden;
          position: relative;
        }
        .mil-team-featured img {
          display: block;
          width: 100%;
        }

        /* 基础样式 */
        .mil-portrait {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 24px;
          background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        /* 大尺寸 - 正方形 */
        .mil-portrait.mil-large {
          padding-bottom: 100%;
        }

        /* 中等尺寸 - 16:9 */
        .mil-portrait.mil-medium {
          padding-bottom: 56.25%;
        }

        /* 小尺寸 - 正方形 */
        .mil-portrait.mil-square {
          padding-bottom: 100%;
        }

        .mil-portrait img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* 悬停效果 */
        .mil-team-card:hover .mil-portrait {
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .mil-team-card:hover .mil-portrait img {
          transform: scale(1.08);
        }

        /* 响应式调整 */
        @media (max-width: 991px) {
          .mil-portrait.mil-large {
            padding-bottom: 75%;
          }
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
                <span className="mil-accent mil-counter" data-number={7}>
                  7
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
          </div>
        </div>
      </div>
      {/* facts end */}
      {/* company culture */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row justify-content-center mil-text-center mil-mb-80">
            <div className="col-xl-8">
              <h2 className="mil-up mil-mb-30">
                {t("aboutUs.section3.title")}
              </h2>
              <p className="mil-text-m mil-soft mil-up">
                {t("aboutUs.section3.description")}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-icon-box mil-with-bg mil-up">
                <img
                  src="/img/home-2/icons/1.svg"
                  alt="icon"
                  className="mil-mb-30"
                />
                <h5 className="mil-mb-20">
                  {t("aboutUs.section3.part1Titel")}
                </h5>
                <p className="mil-text-m mil-soft">
                  {t("aboutUs.section3.part1Description")}
                </p>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-icon-box mil-with-bg mil-up">
                <img
                  src="/img/home-2/icons/2.svg"
                  alt="icon"
                  className="mil-mb-30"
                />
                <h5 className="mil-mb-20">
                  {t("aboutUs.section3.part2Titel")}
                </h5>
                <p className="mil-text-m mil-soft">
                  {t("aboutUs.section3.part2Description")}
                </p>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-icon-box mil-with-bg mil-up">
                <img
                  src="/img/home-2/icons/3.svg"
                  alt="icon"
                  className="mil-mb-30"
                />
                <h5 className="mil-mb-20">
                  {t("aboutUs.section3.part3Titel")}
                </h5>
                <p className="mil-text-m mil-soft">
                  {t("aboutUs.section3.part3Description")}
                </p>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-icon-box mil-with-bg mil-up">
                <img
                  src="/img/home-2/icons/4.svg"
                  alt="icon"
                  className="mil-mb-30"
                />
                <h5 className="mil-mb-20">
                  {t("aboutUs.section3.part4Titel")}
                </h5>
                <p className="mil-text-m mil-soft">
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
              <p
                className="mil-text-l mil-soft mil-up"
                style={{ maxWidth: "calc(100% - 100px)", margin: "0 auto" }}
              >
                {t("about.team")}
              </p>
            </div>
          </div>

          {/* Team photo grid - 特色不规则布局 */}
          <div className="row">
            {/* 第一行 - 2大1小 - pic4和pic3在最前面 */}
            <div className="col-lg-6 col-md-6 mil-mb-30">
              <div className="mil-team-card mil-up">
                <div className="mil-portrait mil-large">
                  <img src="/img/about/team/pic4.png" alt="Team Member" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mil-mb-30">
              <div className="row">
                <div className="col-12 mil-mb-30">
                  <div className="mil-team-card mil-up">
                    <div className="mil-portrait mil-medium">
                      <img src="/img/about/team/pic3.png" alt="Team Member" />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mil-team-card mil-up">
                    <div className="mil-portrait mil-medium">
                      <img src="/img/about/team/pic1.png" alt="Team Member" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 第二行 - 3个均等 */}
            <div className="col-lg-4 col-md-6 mil-mb-30">
              <div className="mil-team-card mil-up">
                <div className="mil-portrait mil-square">
                  <img src="/img/about/team/pic2.png" alt="Team Member" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mil-mb-30">
              <div className="mil-team-card mil-up">
                <div className="mil-portrait mil-square">
                  <img src="/img/about/team/pic5.png" alt="Team Member" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mil-mb-30">
              <div className="mil-team-card mil-up">
                <div className="mil-portrait mil-square">
                  <img src="/img/about/team/pic6.png" alt="Team Member" />
                </div>
              </div>
            </div>

            {/* 第三行 - 1小2大 */}
            <div className="col-lg-6 col-md-6 mil-mb-30">
              <div className="row">
                <div className="col-12 mil-mb-30">
                  <div className="mil-team-card mil-up">
                    <div className="mil-portrait mil-medium">
                      <img src="/img/about/team/pic7.png" alt="Team Member" />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mil-team-card mil-up">
                    <div className="mil-portrait mil-medium">
                      <img src="/img/about/team/pic8.png" alt="Team Member" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mil-mb-30">
              <div className="mil-team-card mil-up">
                <div className="mil-portrait mil-large">
                  <img src="/img/about/team/pic9.png" alt="Team Member" />
                </div>
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
