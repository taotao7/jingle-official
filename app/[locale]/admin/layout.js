"use client";

const AdminLayout = ({ children, params }) => {
  const { locale } = params;

  return (
    <div className="mil-admin-shell">
      <main className="mil-admin-main">
        <section className="mil-admin-content">
          <div className="mil-admin-content__inner">{children}</div>
        </section>
      </main>
      <style jsx>{`
        .mil-admin-shell {
          display: flex;
          min-height: 100vh;
          background: #f5f7fb;
          color: #0f172a;
          font-family: "Switzer-Variable", sans-serif;
        }

        .mil-admin-main {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .mil-admin-header {
          padding: 32px 40px 16px;
          background: transparent;
        }

        .mil-admin-header__inner {
          max-width: 1080px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mil-admin-header__eyebrow {
          font-size: 13px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(15, 23, 42, 0.58);
        }

        .mil-admin-header h1 {
          margin: 0;
          font-size: 32px;
          font-weight: 700;
        }

        .mil-admin-content {
          flex: 1;
          padding: 0 40px 48px;
        }

        .mil-admin-content__inner {
          max-width: 1080px;
          margin: 0 auto;
          width: 100%;
        }

        @media (max-width: 768px) {
          .mil-admin-header {
            padding: 24px 20px 12px;
          }

          .mil-admin-content {
            padding: 0 20px 32px;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminLayout;
