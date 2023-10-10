-- CreateTable
CREATE TABLE `engage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `division_id` INTEGER NOT NULL,
    `intercept` DOUBLE NOT NULL,
    `supervision` DOUBLE NOT NULL,
    `senior_leadership` DOUBLE NOT NULL,
    `image` DOUBLE NOT NULL,
    `evp` DOUBLE NOT NULL,
    `career_advancement` DOUBLE NOT NULL,
    `learning_opportunities` DOUBLE NOT NULL,
    `values` DOUBLE NOT NULL,
    `goals_objectives` DOUBLE NOT NULL,
    `empowerment` DOUBLE NOT NULL,
    `performance_management` DOUBLE NOT NULL,
    `rewards_recognition` DOUBLE NOT NULL,
    `collaboration` DOUBLE NOT NULL,
    `diversity_inclusion` DOUBLE NOT NULL,
    `worklife_balance` DOUBLE NOT NULL,
    `work_structure_resources` DOUBLE NOT NULL,
    `type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enable` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `division_id` INTEGER NOT NULL,
    `intercept` DOUBLE NOT NULL,
    `supervision` DOUBLE NOT NULL,
    `senior_leadership` DOUBLE NOT NULL,
    `image` DOUBLE NOT NULL,
    `evp` DOUBLE NOT NULL,
    `career_advancement` DOUBLE NOT NULL,
    `learning_opportunities` DOUBLE NOT NULL,
    `values` DOUBLE NOT NULL,
    `goals_objectives` DOUBLE NOT NULL,
    `empowerment` DOUBLE NOT NULL,
    `performance_management` DOUBLE NOT NULL,
    `rewards_recognition` DOUBLE NOT NULL,
    `collaboration` DOUBLE NOT NULL,
    `diversity_inclusion` DOUBLE NOT NULL,
    `worklife_balance` DOUBLE NOT NULL,
    `work_structure_resources` DOUBLE NOT NULL,
    `type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `energize` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `division_id` INTEGER NOT NULL,
    `intercept` DOUBLE NOT NULL,
    `supervision` DOUBLE NOT NULL,
    `senior_leadership` DOUBLE NOT NULL,
    `image` DOUBLE NOT NULL,
    `evp` DOUBLE NOT NULL,
    `career_advancement` DOUBLE NOT NULL,
    `learning_opportunities` DOUBLE NOT NULL,
    `values` DOUBLE NOT NULL,
    `goals_objectives` DOUBLE NOT NULL,
    `empowerment` DOUBLE NOT NULL,
    `performance_management` DOUBLE NOT NULL,
    `rewards_recognition` DOUBLE NOT NULL,
    `collaboration` DOUBLE NOT NULL,
    `diversity_inclusion` DOUBLE NOT NULL,
    `worklife_balance` DOUBLE NOT NULL,
    `work_structure_resources` DOUBLE NOT NULL,
    `type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `division_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `engage` ADD CONSTRAINT `engage_division_id_fkey` FOREIGN KEY (`division_id`) REFERENCES `division`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `enable` ADD CONSTRAINT `enable_division_id_fkey` FOREIGN KEY (`division_id`) REFERENCES `division`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `energize` ADD CONSTRAINT `energize_division_id_fkey` FOREIGN KEY (`division_id`) REFERENCES `division`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `item` ADD CONSTRAINT `item_division_id_fkey` FOREIGN KEY (`division_id`) REFERENCES `division`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
