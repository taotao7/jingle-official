import prisma from "@/lib/prisma";

export const getJobs = async ({ locale, publishedOnly = true } = {}) => {
  const where = {};
  if (locale) {
    where.locale = locale;
  }
  if (publishedOnly) {
    where.published = true;
  }

  return prisma.job.findMany({
    where,
    orderBy: [{ priority: "desc" }, { createdAt: "desc" }],
  });
};

export const getJobBySlug = async (locale, slug) => {
  return prisma.job.findUnique({
    where: {
      locale_slug: {
        locale,
        slug,
      },
    },
  });
};
