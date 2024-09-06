/*
  Warnings:

  - You are about to drop the column `rain` on the `Data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Data" DROP COLUMN "rain",
ADD COLUMN     "raining" BOOLEAN;
