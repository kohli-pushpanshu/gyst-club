/*
  Warnings:

  - Made the column `name` on table `Registration` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mobile` on table `Registration` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gender` on table `Registration` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Age` on table `Registration` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isVerified` on table `Registration` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Registration" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "mobile" SET NOT NULL,
ALTER COLUMN "gender" SET NOT NULL,
ALTER COLUMN "Age" SET NOT NULL,
ALTER COLUMN "isVerified" SET NOT NULL;
