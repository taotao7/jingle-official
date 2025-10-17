import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma";

export async function DELETE(request, { params }) {
  const jobId = Number(params.id);
  if (!jobId) {
    return NextResponse.json({ error: "Invalid job id" }, { status: 400 });
  }

  const locale = request.nextUrl.searchParams.get("locale") || undefined;

  await prisma.job.delete({
    where: { id: jobId },
  });

  if (locale) {
    revalidatePath(`/${locale}/contact`);
  }

  return NextResponse.json({ success: true });
}
