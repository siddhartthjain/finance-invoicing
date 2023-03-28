import * as Knex from 'knex';
import { commonFields, id } from '../helper';

export async function up(knex: Knex): Promise<void> {
  // this is the main id such as lfi 0030

  return knex.schema.createTable('fabrics', function (table) {
    id(table);

    table
      .bigInteger('credit_customer_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('credit_customer');
    table.integer('generated_fabric_id');
    table.string('fabric_name').notNullable();
    table.string('fabric_specification').notNullable();

    table.string('hsn_code').notNullable();
    commonFields(knex, table);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('fabrics');
}
