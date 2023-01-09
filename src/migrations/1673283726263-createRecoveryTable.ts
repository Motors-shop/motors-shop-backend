import { MigrationInterface, QueryRunner } from "typeorm";

export class createRecoveryTable1673283726263 implements MigrationInterface {
    name = 'createRecoveryTable1673283726263'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "restoreCodes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "code" character varying(6) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "expiresAt" TIMESTAMP NOT NULL, "issuerId" uuid, CONSTRAINT "PK_cc9da4eb50d398eef4839ed66fb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "restoreCodes" ADD CONSTRAINT "FK_84712b5947af30044e5c0991c26" FOREIGN KEY ("issuerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restoreCodes" DROP CONSTRAINT "FK_84712b5947af30044e5c0991c26"`);
        await queryRunner.query(`DROP TABLE "restoreCodes"`);
    }

}
