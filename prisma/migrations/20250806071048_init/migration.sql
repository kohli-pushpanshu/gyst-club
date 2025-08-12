/*
  Warnings:

  - Made the column `Course` on table `Registration` required. This step will fail if there are existing NULL values in that column.
  - Made the column `screenshotlink` on table `Registration` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Registration" ALTER COLUMN "Course" SET NOT NULL,
ALTER COLUMN "screenshotlink" SET NOT NULL;

-- CreateTable
CREATE TABLE "public"."feedback" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."join" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "Age" INTEGER NOT NULL,
    "Course" TEXT NOT NULL,
    "college" TEXT NOT NULL,

    CONSTRAINT "join_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "join_email_key" ON "public"."join"("email");

-- CreateIndex
CREATE UNIQUE INDEX "join_mobile_key" ON "public"."join"("mobile");
