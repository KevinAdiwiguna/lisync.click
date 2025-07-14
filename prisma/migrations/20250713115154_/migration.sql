/*
  Warnings:

  - You are about to drop the column `withAdd` on the `ShortLink` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ShortLink" DROP COLUMN "withAdd",
ADD COLUMN     "withAds" BOOLEAN NOT NULL DEFAULT true;
