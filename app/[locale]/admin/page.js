"use client";
export default function AdminIndex({ params }) {
  const { locale } = params;
  const title = locale === "zh" ? "请选择左侧功能" : "Select a module";
  const description =
    locale === "zh"
      ? "从左侧导航进入岗位管理，发布或编辑招聘内容。"
      : "Use the navigation to manage job postings and publish content.";

  return (
    <div className="mil-admin-placeholder">
      <h2>{title}</h2>
      <p>{description}</p>
      <style jsx>{`
        .mil-admin-placeholder {
          display: flex;
          flex-direction: column;
          gap: 12px;
          border-radius: 24px;
          background: #fff;
          padding: 40px;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.07);
        }
      `}</style>
    </div>
  );
}
