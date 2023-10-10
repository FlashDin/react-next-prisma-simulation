/*
  Warnings:

  - You are about to alter the column `value_af` on the `item` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `value_bf` on the `item` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `item` MODIFY `value_af` DOUBLE NOT NULL,
    MODIFY `value_bf` DOUBLE NOT NULL;
