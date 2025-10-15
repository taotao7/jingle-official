"use client";
import Banner from "@/components/Banner";
import { CallToAction1 } from "@/components/CallToAction";
import { Testimonials2 } from "@/components/Testimonials";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("about");
  const tech = useTranslations("technology");
  const services = useTranslations("services");
  const saas = useTranslations("saas");
  const ads = useTranslations("ads");
  const riskControl = useTranslations("riskControl");
  const home = useTranslations("homepage");
  return (
    <PlaxLayout>
      {/* banner */}
      <Banner />
      {/* banner end */}
      {/* brands */}
      <div className="mil-brands mil-p-160-160">
        <div className="container">
          <div className="mil-text-center mil-mb-60">
            <h3
              className="mil-up"
              style={{
                fontWeight: "400",
                color: "#666",
                letterSpacing: "0.5px",
              }}
            >
              {home("globalPresence")}{" "}
              <span
                className="mil-text-gradient-2"
                style={{
                  fontSize: "1.5em",
                  fontWeight: "600",
                  margin: "0 5px",
                }}
              >
                7
              </span>{" "}
              {home("battlefields")}
              <span style={{ margin: "0 20px", opacity: "0.5" }}>·</span>
              <span
                className="mil-text-gradient-2"
                style={{
                  fontSize: "1.5em",
                  fontWeight: "600",
                  margin: "0 5px",
                }}
              >
                3000+
              </span>{" "}
              {home("teammates")}
            </h3>
          </div>
          {/* <div className="row justify-content-center">
            <div className="col-3 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/1.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-3 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/2.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-3 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/3.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-3 col-md-2">
              <div className="mil-brand mil-text-center">
                <img src="img/brands/4.svg" alt="brand" className="mil-up" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* brands end */}
      {/* features */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">{t("title")}</h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                {t("intro")}
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">{home("globalBusiness")}</h5>
                    <p className="mil-text-m mil-soft">{t("history")}</p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">{home("complianceAndTalent")}</h5>
                    <p className="mil-text-m mil-soft">
                      {t("compliance")} {t("team")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame">
                <img src="img/home-2/2.png" alt="image" className="mil-up" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* call to action */}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-visible mil-illustration-fix mil-p-160-0">
            <div className="row align-items-end">
              <div className="mil-text-center">
                <h2 className="mil-mb-30 mil-up">
                  {tech("titlePart1")}
                  {tech("titlePart2")}
                </h2>
                <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                  {tech("subtitle")}
                </p>
                <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                  {tech("description")}
                </p>
              </div>
            </div>
            <div className="mil-illustration-absolute mil-up">
              <img
                src="img/home-2/3.png"
                alt="illustration"
                style={{
                  borderRadius: "50px",
                  boxShadow: "0 18px 60px 0 rgba(44,70,144,0.09)",
                  overflow: "hidden",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
      {/* icon boxes */}
      <div className="icon-boxes mil-p-160-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-with-bg mil-center mil-up">
                <img
                  src="img/home-2/icons/1.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-up">{tech("impact.redefine")}</h5>
                <p className="mil-text-s mil-soft mil-up">
                  {tech("impact.description")}
                </p>
              </div>
            </div>
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-with-bg mil-center mil-up">
                <img
                  src="img/home-2/icons/2.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-up">{tech("impact.growth")}</h5>
                <p className="mil-text-s mil-soft mil-up">
                  {tech("impact.growthDesc")}
                </p>
              </div>
            </div>
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-with-bg mil-center mil-up">
                <img
                  src="img/home-2/icons/3.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-up">{tech("impact.partner")}</h5>
                <p className="mil-text-s mil-soft mil-up">
                  {tech("impact.partnerDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* icon boxes end */}
      {/* call to action */}
      <div className="mil-cta mil-up services-section">
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row align-items-end">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up">{services("title")}</h2>
              </div>
              <div className="col-xl-4 mil-mb-80 mil-up">
                <Link
                  href="about"
                  className="mil-btn mil-m mil-add-arrow mil-adaptive-right"
                >
                  {services("learnMore")}
                </Link>
              </div>
            </div>
            <div className="row services-row">
              <div className="col-xl-4 col-md-6 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/1.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">{saas("title")}</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    {saas("description")}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/2.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">{ads("title")}</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    {ads("description")}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/3.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">{riskControl("title")}</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    {riskControl("description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
      {/* features */}
      <div className="mil-features mil-p-160-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">{home("saasTitle")}</h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                {home("saasDescription")}
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-60">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">{home("saasIntegration")}</h5>
                    <p className="mil-text-m mil-soft">
                      {home("saasIntegrationDesc")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <img
                src="img/home-2/4.png"
                alt="image"
                className="mil-up"
                style={{ width: "100%", borderRadius: "50px" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* features */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">{home("adsTitle")}</h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                {home("adsDescription")}
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">{home("adsTargeting")}</h5>
                    <p className="mil-text-m mil-soft">
                      {home("adsTargetingDesc")}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">{home("adsCreative")}</h5>
                    <p className="mil-text-m mil-soft">
                      {home("adsCreativeDesc")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-5 mil-mb-80">
              <img
                src="img/home-2/5.png"
                alt="image"
                className="mil-up"
                style={{ width: "100%", borderRadius: "50px" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* features */}
      <div className="mil-features mil-p-0-160">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">{home("riskTitle")}</h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                {home("riskDescription")}
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-60">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">{home("riskMonitoring")}</h5>
                    <p className="mil-text-m mil-soft">
                      {home("riskMonitoringDesc")}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">{home("riskDecision")}</h5>
                    <p className="mil-text-m mil-soft">
                      {home("riskDecisionDesc")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <img
                src="img/home-2/6.png"
                alt="image"
                className="mil-up"
                style={{ width: "100%", borderRadius: "50px" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      <style jsx>{`
        @media (max-width: 1199px) {
          .mil-banner-text h1 {
            font-size: clamp(1.75rem, 4vw, 3rem) !important;
            width: 100% !important;
            max-width: 100% !important;
          }
        }
        @media (max-width: 767px) {
          /* 全局间距调整 */
          :global(.mil-p-160-160) {
            padding: 80px 0 !important;
          }
          :global(.mil-p-160-130) {
            padding: 80px 0 65px !important;
          }
          :global(.mil-p-160-80) {
            padding: 80px 0 40px !important;
          }
          :global(.mil-p-0-80) {
            padding: 0 0 40px !important;
          }
          :global(.mil-p-0-160) {
            padding: 0 0 80px !important;
          }
          :global(.mil-p-160-100) {
            padding: 80px 0 50px !important;
          }

          /* 服务模块特定样式 */
          .services-section :global(.container) {
            padding-left: 20px !important;
            padding-right: 20px !important;
            max-width: 100% !important;
          }
          .services-section :global(.mil-out-frame) {
            padding: 40px 0 !important;
            margin: 0 !important;
          }
          .services-section :global(.mil-mb-80-adaptive-30) {
            margin-bottom: 20px !important;
            text-align: center;
            padding: 0 10px;
          }
          .services-section :global(.mil-mb-80) {
            margin-bottom: 30px !important;
            text-align: center;
          }
          .services-section :global(.mil-btn) {
            display: inline-block;
            margin: 0 auto;
          }
          .services-section :global(.row.align-items-end) {
            text-align: center;
            margin: 0 !important;
          }
          .services-section :global(.services-row) {
            margin: 20px 0 0 0 !important;
          }
          .services-section :global(.services-row) > div {
            padding-left: 15px !important;
            padding-right: 15px !important;
            margin-bottom: 20px;
          }
          .services-section :global(.mil-icon-box) {
            padding: 30px 20px !important;
            text-align: center;
            background: transparent;
            height: 100%;
          }
          .services-section :global(.mil-icon-box img) {
            max-width: 60px !important;
            height: auto;
            margin: 0 auto 20px !important;
            display: block;
          }
          .services-section :global(.mil-icon-box h5) {
            font-size: clamp(1rem, 3.5vw, 1.25rem) !important;
            margin-bottom: 15px !important;
            padding: 0 10px;
            word-wrap: break-word;
          }
          .services-section :global(.mil-icon-box .mil-text-m) {
            font-size: clamp(0.875rem, 2.5vw, 1rem) !important;
            line-height: 1.7 !important;
            padding: 0 10px;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          /* 标题和文本调整 */
          :global(.mil-text-center h3) {
            font-size: clamp(1.25rem, 3vw, 1.5rem) !important;
          }
          :global(h2) {
            font-size: clamp(1.5rem, 4vw, 2rem) !important;
          }
          :global(h5) {
            font-size: clamp(1rem, 3vw, 1.25rem) !important;
          }
          :global(.mil-text-m) {
            font-size: clamp(0.875rem, 2vw, 1rem) !important;
          }
          :global(.mil-text-s) {
            font-size: 0.875rem !important;
          }

          /* 图片圆角调整 */
          :global(img[style*="borderRadius"]) {
            border-radius: 20px !important;
          }

          /* 间距调整 */
          :global(.mil-mb-60) {
            margin-bottom: 30px !important;
          }
          :global(.mil-mb-80) {
            margin-bottom: 40px !important;
          }
          :global(.mil-mb-30) {
            margin-bottom: 20px !important;
          }
          :global(.mil-mb-20) {
            margin-bottom: 15px !important;
          }

          /* Icon boxes 调整 */
          :global(.mil-icon-box) {
            padding: 30px 20px !important;
          }
          :global(.mil-icon-box img) {
            max-width: 48px !important;
          }

          /* 按钮调整 */
          :global(.mil-btn) {
            padding: 12px 30px !important;
            font-size: 0.875rem !important;
          }

          /* 列表调整 */
          :global(.mil-list-2) {
            padding-left: 0 !important;
          }

          /* 图片容器调整 */
          :global(.mil-image-frame img),
          :global(.mil-banner-img img) {
            width: 100% !important;
            height: auto !important;
          }

          /* 渐变文本调整 */
          :global(.mil-text-gradient-2) {
            font-size: 1.25rem !important;
          }

          /* Call to action 调整 */
          :global(.mil-out-frame) {
            padding: 40px 20px !important;
          }
          :global(.mil-illustration-absolute img) {
            border-radius: 20px !important;
          }

          /* 居中对齐 */
          :global(.mil-adaptive-right) {
            margin: 0 auto !important;
            display: block !important;
            text-align: center !important;
          }

          /* 行反转调整 */
          :global(.flex-sm-row-reverse) {
            flex-direction: column-reverse !important;
          }
        }

        /* 平板适配 */
        @media (min-width: 768px) and (max-width: 1199px) {
          :global(.mil-p-160-160) {
            padding: 120px 0 !important;
          }
          :global(.mil-p-160-130) {
            padding: 120px 0 100px !important;
          }
          :global(.mil-p-160-80) {
            padding: 120px 0 60px !important;
          }
          :global(.mil-p-0-80) {
            padding: 0 0 60px !important;
          }
          :global(.mil-p-0-160) {
            padding: 0 0 120px !important;
          }
          :global(.mil-p-160-100) {
            padding: 120px 0 80px !important;
          }

          :global(h2) {
            font-size: clamp(1.75rem, 3vw, 2.5rem) !important;
          }

          /* 服务模块平板优化 */
          .services-section :global(.mil-out-frame) {
            padding: 60px 30px !important;
          }
          .services-section :global(.mil-icon-box) {
            padding: 35px 25px !important;
          }
          .services-section :global(.mil-icon-box img) {
            max-width: 70px !important;
          }
        }
      `}</style>
    </PlaxLayout>
  );
};
export default page;
