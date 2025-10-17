"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const navItems = [
  {
    href: "jobs",
    label: {
      en: "Jobs",
      zh: "岗位管理",
    },
  },
];

const AdminLayout = ({ children, params }) => {
  const { locale } = params;
  const pathname = usePathname();

  const navLinks = useMemo(() => {
    return navItems.map((item) => {
      const href = `/${locale}/admin/${item.href}`;
      const isActive = pathname?.startsWith(href);
      const label = item.label[locale] ?? item.label.en;

      return (
        <li
          key={href}
          className={`mil-admin-nav-item ${isActive ? "active" : ""}`}
        >
          <Link href={href} className="mil-admin-link">
            {label}
          </Link>
        </li>
      );
    });
  }, [locale, pathname]);

  const panelTitle = locale === "zh" ? "后台管理" : "Admin Panel";

  return (
    <div className="mil-admin-layout">
      <main className="mil-admin-main">
        <header className="mil-admin-header">
          <h1>{panelTitle}</h1>
        </header>
        <section className="mil-admin-content">{children}</section>
      </main>
      <style jsx>{`
        .mil-admin-layout {
          display: flex;
          min-height: 100vh;
          background: #f7f9fc;
          color: #1f2937;
          font-family: "Switzer-Variable", sans-serif;
        }
        .mil-admin-main {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .mil-admin-header {
          padding: 24px 32px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
          background: #fff;
        }
        .mil-admin-content {
          padding: 32px;
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default AdminLayout;
