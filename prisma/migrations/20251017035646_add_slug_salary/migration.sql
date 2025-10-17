/*
  Warnings:

  - Added the required column `slug` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "locale" TEXT NOT NULL DEFAULT 'en',
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT,
    "salaryRange" TEXT,
    "employmentType" TEXT,
    "summary" TEXT,
    "content" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Job" ("content", "createdAt", "employmentType", "id", "locale", "location", "priority", "published", "summary", "title", "updatedAt") SELECT "content", "createdAt", "employmentType", "id", "locale", "location", "priority", "published", "summary", "title", "updatedAt" FROM "Job";
DROP TABLE "Job";
ALTER TABLE "new_Job" RENAME TO "Job";
CREATE INDEX "Job_locale_published_priority_idx" ON "Job"("locale", "published", "priority");
CREATE UNIQUE INDEX "Job_locale_slug_key" ON "Job"("locale", "slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
