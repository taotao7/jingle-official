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
              全球{" "}
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
              大战场
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
              位顶尖队友
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
                    <h5 className="mil-mb-15">全球业务布局</h5>
                    <p className="mil-text-m mil-soft">{t("history")}</p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">合规与人才</h5>
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
      <div className="mil-cta mil-up">
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
            <div className="row">
              <div className="col-xl-4 mil-mb-60">
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
              <div className="col-xl-4 mil-mb-60">
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
              <div className="col-xl-4 mil-mb-60">
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
              <h2 className="mil-mb-30 mil-up">
                全球化SAAS平台，开启高效运营新篇章
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                金果未来云平台支持多语种、全流程业务管理，
                <br />
                让您的金融业务在全球市场更可控、更高效、更精准。
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-60">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">智能化工具整合</h5>
                    <p className="mil-text-m mil-soft">
                      整合数据分析、智能触达、三方风控等多维度工具，
                      <br />
                      通过大数据AI赋能，实现营销、客管、绩效一体化管理，
                      <br />
                      有效降低风险，全面提升运营效率。
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
              <h2 className="mil-mb-30 mil-up">精准投放，连接全球用户</h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                覆盖全球主流媒体资源，配合第三方跟踪与防欺诈工具，
                <br />
                为您的产品提供高转化、精准触达的全球广告投放服务。
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">多维度智能定向</h5>
                    <p className="mil-text-m mil-soft">
                      支持国家、设备、浏览器、时间、兴趣等多维度定向，
                      <br />
                      精准过滤受众，有效提升投资回报率，让每一分预算都物有所值。
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">全流程创意支持</h5>
                    <p className="mil-text-m mil-soft">
                      从广告创意策划、素材制作到DSP渠道投放，
                      <br />
                      提供CPI、CPA、CPS等效果营销方案，助力产品快速推广至全球市场。
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
              <h2 className="mil-mb-30 mil-up">智能风控，护航业务安全</h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                集成多维度数据风控体系，提供实时风险评估与预警服务，
                <br />
                帮助企业有效识别欺诈行为，构建安全可信的业务环境。
              </p>
              <ul className="mil-list-2 mil-type-2 mil-mb-60">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">全方位风险监控</h5>
                    <p className="mil-text-m mil-soft">
                      结合设备指纹、行为分析、信用评估等多维度数据，
                      <br />
                      实时识别异常交易和欺诈风险，提供智能化的风险预警与决策支持。
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">数据驱动决策</h5>
                    <p className="mil-text-m mil-soft">
                      整合第三方征信、黑名单库等多源数据，
                      <br />
                      通过机器学习模型持续优化风控策略，为业务增长提供坚实保障。
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
    </PlaxLayout>
  );
};
export default page;
