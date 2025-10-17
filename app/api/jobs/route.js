import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { JSDOM } from "jsdom";
import createDOMPurify from "dompurify";

import prisma from "@/lib/prisma";

const locales = ["en", "zh"];

let domPurifyInstance;
const sanitizeHtml = (html) => {
  if (!domPurifyInstance) {
    const { window } = new JSDOM("");
    domPurifyInstance = createDOMPurify(window);
  }
  return domPurifyInstance.sanitize(html ?? "");
};

const sanitizePayload = (payload) => {
  const rawLocale =
    typeof payload.locale === "string" ? payload.locale.trim() : "";
  const locale = locales.includes(rawLocale) ? rawLocale : locales[0];

  const title = String(payload.title || "").trim();

  const location = payload.location ? String(payload.location).trim() : null;
  const salaryRange = payload.salaryRange
    ? String(payload.salaryRange).trim()
    : null;
  const employmentType = payload.employmentType
    ? String(payload.employmentType).trim()
    : null;
  const summary = payload.summary ? String(payload.summary).trim() : null;
  const content = sanitizeHtml(payload.content);

  const published = Boolean(payload.published);
  const priorityNumber = Number(payload.priority);
  const priority = Number.isNaN(priorityNumber) ? 0 : priorityNumber;

  return {
    id: payload.id ? Number(payload.id) : undefined,
    locale,
    title,
    location: location || null,
    salaryRange: salaryRange || null,
    employmentType: employmentType || null,
    summary,
    content,
    published,
    priority,
  };
};

const ensureRequiredFields = (data) => {
  if (!data.title) {
    throw new Error("Title is required");
  }
};

const revalidateContact = (locale) => {
  revalidatePath(`/${locale}/contact`);
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || undefined;
  const publishedOnly = searchParams.get("published") !== "false";

  const where = {};
  if (locale) {
    where.locale = locale;
  }
  if (publishedOnly) {
    where.published = true;
  }

  const jobs = await prisma.job.findMany({
    where,
    orderBy: [{ priority: "desc" }, { createdAt: "desc" }],
  });

  return NextResponse.json(jobs);
}

export async function POST(request) {
  try {
    const { id: _id, ...data } = sanitizePayload(await request.json());
    ensureRequiredFields(data);

    const job = await prisma.job.create({
      data,
    });

    revalidateContact(data.locale);

    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to create job" },
      { status: 400 }
    );
  }
}

export async function PUT(request) {
  try {
    const payload = sanitizePayload(await request.json());

    if (!payload.id) {
      return NextResponse.json(
        { error: "Job id is required" },
        { status: 400 }
      );
    }

    const { id, locale, ...data } = payload;
    ensureRequiredFields(data);

    const job = await prisma.job.update({
      where: { id },
      data: {
        locale,
        ...data,
      },
    });

    revalidateContact(locale);

    return NextResponse.json(job);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to update job" },
      { status: 400 }
    );
  }
}
