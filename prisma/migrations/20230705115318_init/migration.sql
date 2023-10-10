/*
  Warnings:

  - You are about to drop the column `estimate` on the `enable` table. All the data in the column will be lost.
  - You are about to drop the column `pr` on the `enable` table. All the data in the column will be lost.
  - You are about to drop the column `std_err` on the `enable` table. All the data in the column will be lost.
  - You are about to drop the column `t_value` on the `enable` table. All the data in the column will be lost.
  - You are about to drop the column `estimate` on the `energize` table. All the data in the column will be lost.
  - You are about to drop the column `pr` on the `energize` table. All the data in the column will be lost.
  - You are about to drop the column `std_err` on the `energize` table. All the data in the column will be lost.
  - You are about to drop the column `t_value` on the `energize` table. All the data in the column will be lost.
  - You are about to drop the column `estimate` on the `engage` table. All the data in the column will be lost.
  - You are about to drop the column `pr` on the `engage` table. All the data in the column will be lost.
  - You are about to drop the column `std_err` on the `engage` table. All the data in the column will be lost.
  - You are about to drop the column `t_value` on the `engage` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `item` table. All the data in the column will be lost.
  - Added the required column `reg` to the `enable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reg` to the `energize` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reg` to the `engage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `division_id` to the `item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value_af` to the `item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value_bf` to the `item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `enable` DROP COLUMN `estimate`,
    DROP COLUMN `pr`,
    DROP COLUMN `std_err`,
    DROP COLUMN `t_value`,
    ADD COLUMN `reg` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `energize` DROP COLUMN `estimate`,
    DROP COLUMN `pr`,
    DROP COLUMN `std_err`,
    DROP COLUMN `t_value`,
    ADD COLUMN `reg` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `engage` DROP COLUMN `estimate`,
    DROP COLUMN `pr`,
    DROP COLUMN `std_err`,
    DROP COLUMN `t_value`,
    ADD COLUMN `reg` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `item` DROP COLUMN `name`,
    ADD COLUMN `division_id` INTEGER NOT NULL,
    ADD COLUMN `value_af` VARCHAR(191) NOT NULL,
    ADD COLUMN `value_bf` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `item` ADD CONSTRAINT `item_division_id_fkey` FOREIGN KEY (`division_id`) REFERENCES `division`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
