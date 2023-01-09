import { MigrationInterface, QueryRunner } from "typeorm";

export class editRecoveryTable1673287061294 implements MigrationInterface {
    name = 'editRecoveryTable1673287061294'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restoreCodes" ADD "hasUsed" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restoreCodes" DROP COLUMN "hasUsed"`);
    }

}
