import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Questrial } from "next/font/google";
import { notFound } from "next/navigation";

import "@fonts/css/switzer.css";
import "../globals.css";

import "@fonts/font-awesome.min.css";

import "@css/plugins/bootstrap-grid.css";

import "@css/plugins/swiper.min.css";

import "@css/plugins/magnific-popup.css";

import Preloader from "@/layouts/Preloader";
import "@css/style.css";
import { locales } from "../../i18n/request";

const secondary_font = Questrial({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title: "Jingle Will",
  description: "科技赋能金融普惠，让全球服务更智能、更可靠",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;

  setRequestLocale(locale);

  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    console.error("[i18n] failed to load messages for locale", locale, error);
    notFound();
  }

  return (
    <html lang={locale} className={`${secondary_font.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Preloader />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
