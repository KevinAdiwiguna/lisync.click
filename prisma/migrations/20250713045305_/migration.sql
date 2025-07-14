/*
  Warnings:

  - A unique constraint covering the columns `[userId,feature]` on the table `FeatureLimit` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ShortLink" ADD COLUMN     "customSlug" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "FeatureLimit_userId_feature_key" ON "FeatureLimit"("userId", "feature");
