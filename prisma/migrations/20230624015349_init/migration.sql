/*
  Warnings:

  - You are about to drop the column `divisionId` on the `enable` table. All the data in the column will be lost.
  - You are about to drop the column `divisionId` on the `energize` table. All the data in the column will be lost.
  - You are about to drop the column `divisionId` on the `engage` table. All the data in the column will be lost.
  - You are about to drop the column `division_id` on the `item` table. All the data in the column will be lost.
  - Added the required column `variable_id` to the `item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `enable` DROP FOREIGN KEY `enable_divisionId_fkey`;

-- DropForeignKey
ALTER TABLE `energize` DROP FOREIGN KEY `energize_divisionId_fkey`;

-- DropForeignKey
ALTER TABLE `engage` DROP FOREIGN KEY `engage_divisionId_fkey`;

-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `item_division_id_fkey`;

-- AlterTable
ALTER TABLE `enable` DROP COLUMN `divisionId`;

-- AlterTable
ALTER TABLE `energize` DROP COLUMN `divisionId`;

-- AlterTable
ALTER TABLE `engage` DROP COLUMN `divisionId`;

-- AlterTable
ALTER TABLE `item` DROP COLUMN `division_id`,
    ADD COLUMN `variable_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `item` ADD CONSTRAINT `item_variable_id_fkey` FOREIGN KEY (`variable_id`) REFERENCES `variable`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
