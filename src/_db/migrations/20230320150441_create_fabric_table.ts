import * as Knex from 'knex';
import { commonFields, id } from '../helper';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('fabrics', function (table) {
    id(table);
    table
      .bigInteger('customer_id')
      .notNullable()
      .references('id')
      .inTable('locofastroot');
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
