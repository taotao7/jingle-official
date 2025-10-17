import DOMPurify from "isomorphic-dompurify";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageBanner } from "@/components/Banner";
import PlaxLayout from "@/layouts/PlaxLayout";
import { getJobs } from "@/lib/jobs";

import styles from "./contact.module.css";

const sanitizeHtml = (html) => {
  return DOMPurify.sanitize(html ?? "");
};

const JobCard = ({ job, t }) => {
  return (
    <article className={`mil-job-card mil-up ${styles.jobCard}`}>
      <header className={`${styles.jobCardHeader}`}>
        <div>
          <h3 className={`${styles.jobCardTitle}`}>{job.title}</h3>
          {job.summary && (
            <p className={`${styles.jobCardSummary}`}>{job.summary}</p>
          )}
        </div>
        {/* <a
          href={`mailto:hr@plax.network?subject=${encodeURIComponent(`Apply: ${job.title}`)}`}
          className="mil-btn mil-sm"
        >
          {t("cta")}
        </a> */}
      </header>
      <ul className={`${styles.jobCardMeta}`}>
        {job.location && (
          <li className={styles.jobCardMetaItem}>
            <span className={styles.jobCardLabel}>{t("location")}</span>
            <span className={styles.jobCardValue}>{job.location}</span>
          </li>
        )}
        {job.employmentType && (
          <li className={styles.jobCardMetaItem}>
            <span className={styles.jobCardLabel}>{t("employment")}</span>
            <span className={styles.jobCardValue}>{job.employmentType}</span>
          </li>
        )}
        {job.salaryRange && (
          <li className={styles.jobCardMetaItem}>
            <span className={styles.jobCardLabel}>{t("salary")}</span>
            <span className={styles.jobCardValue}>{job.salaryRange}</span>
          </li>
        )}
      </ul>
      <div
        className={styles.jobCardContent}
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(job.content) }}
      />
    </article>
  );
};

const page = async ({ params }) => {
  const { locale } = params;
  setRequestLocale(locale);

  const jobs = await getJobs({ locale, publishedOnly: true });

  const tContact = await getTranslations({ locale, namespace: "contact" });
  const tJobs = await getTranslations({ locale, namespace: "jobs" });

  return (
    <PlaxLayout bg={false}>
      <PageBanner
        pageName={tContact("title")}
        title={tContact("description")}
      />

      <div className="mil-blog-list mil-p-0-160">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div
                className={`mil-job-section mil-p-160-0 ${styles.jobSection}`}
              >
                <div className={`${styles.jobSectionHead} mil-up`}>
                  <div className={styles.jobSectionTitleRow}>
                    <div>
                      <h2 className={styles.jobSectionTitle}>
                        {tJobs("sectionTitle")}
                      </h2>
                      <p
                        className={`${styles.jobSectionSubtitle} mil-text-m mil-soft`}
                      >
                        {tJobs("sectionSubtitle")}
                      </p>
                    </div>
                  </div>
                </div>
                {jobs.length === 0 ? (
                  <p className="mil-up mil-text-m mil-soft">{tJobs("empty")}</p>
                ) : (
                  <div className={styles.jobGrid}>
                    {jobs.map((job) => (
                      <JobCard key={job.id} job={job} t={tJobs} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PlaxLayout>
  );
};

export default page;
