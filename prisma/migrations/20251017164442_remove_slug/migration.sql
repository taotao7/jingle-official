-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "locale" TEXT NOT NULL DEFAULT 'en',
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
INSERT INTO "new_Job" ("id", "locale", "title", "location", "salaryRange", "employmentType", "summary", "content", "published", "priority", "createdAt", "updatedAt") SELECT "id", "locale", "title", "location", "salaryRange", "employmentType", "summary", "content", "published", "priority", "createdAt", "updatedAt" FROM "Job";
DROP TABLE "Job";
ALTER TABLE "new_Job" RENAME TO "Job";
CREATE INDEX "Job_locale_published_priority_idx" ON "Job"("locale", "published", "priority");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

