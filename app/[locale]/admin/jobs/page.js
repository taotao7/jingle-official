"use client";

import { useMemo, useState, useTransition } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useTranslations } from "next-intl";

import RichTextEditor from "@/components/RichTextEditor";
import { useDeleteJob, useJobs, useUpsertJob } from "./hooks";

const LOGIN_ENDPOINT = "/api/auth/login";

const queryClient = new QueryClient();

const initialFormState = {
  id: null,
  title: "",
  slug: "",
  location: "",
  salaryRange: "",
  employmentType: "",
  summary: "",
  content: "",
  published: true,
  priority: 0,
};

const JobsPageInner = ({ locale }) => {
  const t = useTranslations("admin.jobs");

  const [formState, setFormState] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleUnlock = (event) => {
    event.preventDefault();
    setError(null);
    startTransition(() => {
      const run = async () => {
        try {
          const res = await fetch(LOGIN_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          });
          if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            setError(data.error || t("invalidCredentials"));
            return;
          }
          setIsUnlocked(true);
          setCredentials({ username: "", password: "" });
        } catch (e) {
          setError(t("loginFailed"));
        }
      };
      run();
    });
  };

  const { data: jobs = [], isLoading, isError } = useJobs(locale);
  const upsertJob = useUpsertJob(locale);
  const deleteJob = useDeleteJob(locale);

  const handleChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await upsertJob.mutateAsync(formState);
    setFormState(initialFormState);
    setIsEditing(false);
  };

  const handleEdit = (job) => {
    setFormState({ ...job });
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm(t("confirmDelete"))) {
      await deleteJob.mutateAsync(id);
      if (formState.id === id) {
        setFormState(initialFormState);
        setIsEditing(false);
      }
    }
  };

  const submitLabel = useMemo(() => t("save"), [t]);
  const loadingLabel = t("loading");
  const loadingErrorLabel = t("loadingError");
  const emptyLabel = t("empty");
  const publishedLabel = t("published");
  const draftLabel = t("draft");
  const editLabel = t("edit");
  const deleteLabel = t("delete");

  if (!isUnlocked) {
    return (
      <div className="mil-admin-login">
        <form className="mil-admin-login__form" onSubmit={handleUnlock}>
          <h2>{t("loginTitle")}</h2>
          <label className="mil-field">
            <span>{t("username")}</span>
            <input
              type="text"
              className="mil-input"
              value={credentials.username}
              onChange={(event) =>
                setCredentials((prev) => ({
                  ...prev,
                  username: event.target.value,
                }))
              }
              autoComplete="username"
            />
          </label>
          <label className="mil-field">
            <span>{t("password")}</span>
            <input
              type="password"
              className="mil-input"
              value={credentials.password}
              onChange={(event) =>
                setCredentials((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
              autoComplete="current-password"
            />
          </label>
          {error && <p className="mil-error-text">{error}</p>}
          <button type="submit" className="mil-btn mil-m" disabled={isPending}>
            {isPending ? t("loggingIn") : t("unlock")}
          </button>
        </form>
        <style jsx>{`
          .mil-admin-login {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          .mil-admin-login__form {
            display: flex;
            flex-direction: column;
            gap: 16px;
            background: #fff;
            border-radius: 24px;
            padding: 32px;
            box-shadow: 0 20px 50px rgba(15, 23, 42, 0.07);
            min-width: 320px;
          }
          .mil-error-text {
            margin: 0;
            color: #b91c1c;
            font-size: 14px;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="mil-admin-jobs">
      <div className="mil-admin-cards">
        <section className="mil-admin-form-card">
          <header>
            <h2>{t("formTitle")}</h2>
            {isEditing && (
              <button
                type="button"
                className="mil-btn mil-sm mil-light"
                onClick={() => {
                  setIsEditing(false);
                  setFormState(initialFormState);
                }}
              >
                {t("createNew")}
              </button>
            )}
          </header>
          <form onSubmit={handleSubmit} className="mil-form">
            <div className="mil-field-row">
              <label className="mil-field">
                <span>{t("fields.title")}</span>
                <input
                  required
                  type="text"
                  className="mil-input"
                  value={formState.title}
                  onChange={(event) =>
                    handleChange("title", event.target.value)
                  }
                />
              </label>
              <label className="mil-field">
                <span>{t("fields.slug")}</span>
                <input
                  required
                  type="text"
                  className="mil-input"
                  value={formState.slug}
                  onChange={(event) => handleChange("slug", event.target.value)}
                />
              </label>
            </div>
            <div className="mil-field-row">
              <label className="mil-field">
                <span>{t("fields.location")}</span>
                <input
                  type="text"
                  className="mil-input"
                  value={formState.location}
                  onChange={(event) =>
                    handleChange("location", event.target.value)
                  }
                />
              </label>
              <label className="mil-field">
                <span>{t("fields.salary")}</span>
                <input
                  type="text"
                  className="mil-input"
                  value={formState.salaryRange}
                  onChange={(event) =>
                    handleChange("salaryRange", event.target.value)
                  }
                />
              </label>
            </div>
            <div className="mil-field-row">
              <label className="mil-field">
                <span>{t("fields.employment")}</span>
                <input
                  type="text"
                  className="mil-input"
                  value={formState.employmentType}
                  onChange={(event) =>
                    handleChange("employmentType", event.target.value)
                  }
                />
              </label>
              <label className="mil-field">
                <span>{t("fields.priority")}</span>
                <input
                  type="number"
                  className="mil-input"
                  value={formState.priority}
                  onChange={(event) =>
                    handleChange("priority", Number(event.target.value))
                  }
                />
              </label>
            </div>
            <label className="mil-field">
              <span>{t("fields.summary")}</span>
              <textarea
                className="mil-input mil-textarea"
                rows={3}
                value={formState.summary}
                onChange={(event) =>
                  handleChange("summary", event.target.value)
                }
              />
            </label>
            <label className="mil-field">
              <span>{t("fields.content")}</span>
              <RichTextEditor
                value={formState.content}
                onChange={(value) => handleChange("content", value)}
                placeholder={t("fields.content")}
              />
            </label>
            <div className="mil-field-row mil-field-row--bottom">
              <label className="mil-toggle">
                <input
                  type="checkbox"
                  checked={formState.published}
                  onChange={(event) =>
                    handleChange("published", event.target.checked)
                  }
                />
                <span>{t("fields.published")}</span>
              </label>
              <button
                type="submit"
                className="mil-btn mil-m"
                disabled={upsertJob.isPending}
              >
                {upsertJob.isPending ? t("saving") : submitLabel}
              </button>
            </div>
          </form>
        </section>

        <section className="mil-admin-list-card">
          <header>
            <h2>{t("listTitle")}</h2>
          </header>
          {isLoading && <p>{loadingLabel}</p>}
          {isError && <p className="mil-error">{loadingErrorLabel}</p>}
          {!isLoading && !isError && jobs.length === 0 && <p>{emptyLabel}</p>}
          <ul className="mil-job-list">
            {jobs.map((job) => (
              <li key={job.id} className="mil-job-item">
                <div>
                  <h3>{job.title}</h3>
                  <p className="mil-job-meta">
                    {job.location && <span>{job.location}</span>}
                    {job.employmentType && <span>{job.employmentType}</span>}
                    {job.salaryRange && <span>{job.salaryRange}</span>}
                    <span>{job.published ? publishedLabel : draftLabel}</span>
                  </p>
                </div>
                <div className="mil-job-actions">
                  <button
                    type="button"
                    className="mil-btn mil-sm mil-light"
                    onClick={() => handleEdit(job)}
                  >
                    {editLabel}
                  </button>
                  <button
                    type="button"
                    className="mil-btn mil-sm mil-danger"
                    onClick={() => handleDelete(job.id)}
                    disabled={deleteJob.isPending}
                  >
                    {deleteLabel}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <style jsx>{`
        .mil-admin-cards {
          display: grid;
          gap: 24px;
          grid-template-columns: minmax(0, 1fr);
        }
        .mil-admin-form-card,
        .mil-admin-list-card {
          background: #fff;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.07);
        }
        .mil-admin-form-card header,
        .mil-admin-list-card header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .mil-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .mil-field-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }
        .mil-field-row--bottom {
          align-items: center;
        }
        .mil-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mil-field span {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
        }
        .mil-input {
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 14px;
          transition: border-color 0.2s ease;
          background: #f8fafc;
        }
        .mil-input:focus {
          outline: none;
          border-color: rgba(59, 130, 246, 0.4);
          background: #fff;
        }
        .mil-textarea {
          resize: vertical;
        }
        .mil-toggle {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
        }
        .mil-btn {
          border: none;
          border-radius: 999px;
          padding: 0 22px;
          height: 40px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .mil-btn.mil-m {
          height: 44px;
        }
        .mil-btn.mil-sm {
          height: 36px;
          padding: 0 16px;
          font-size: 14px;
        }
        .mil-btn.mil-light {
          background: rgba(59, 130, 246, 0.1);
          color: #1d4ed8;
        }
        .mil-btn.mil-danger {
          background: rgba(239, 68, 68, 0.1);
          color: #b91c1c;
        }
        .mil-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 20px rgba(15, 23, 42, 0.08);
        }
        .mil-job-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .mil-job-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: #f8fafc;
          border-radius: 16px;
        }
        .mil-job-item h3 {
          margin: 0 0 4px 0;
          font-size: 18px;
        }
        .mil-job-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 0;
          color: #64748b;
          font-size: 14px;
        }
        .mil-job-meta span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 999px;
          background: rgba(59, 130, 246, 0.08);
        }
        .mil-job-actions {
          display: flex;
          gap: 10px;
        }
        .mil-error {
          color: #b91c1c;
        }
        @media (max-width: 768px) {
          .mil-job-item {
            flex-direction: column;
            align-items: flex-start;
          }
          .mil-job-actions {
            width: 100%;
          }
          .mil-job-actions button {
            flex: 1;
          }
        }
      `}</style>
    </div>
  );
};

const JobsPage = ({ params }) => {
  const { locale } = params;
  return (
    <QueryClientProvider client={queryClient}>
      <JobsPageInner locale={locale} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default JobsPage;
