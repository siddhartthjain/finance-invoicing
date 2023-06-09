import * as Knex from 'knex';
import { commonFields, id } from '../helper';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('credit_customer', function (table) {
    id(table);
    table
      .bigInteger('brand_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('locoafastroot');
    table.string('first_name').notNullable();
    table.string('last_name').defaultTo('');
    table.boolean('is_credit_available').defaultTo(1);
    table
      .specificType('credit_period', 'TINYINT(2)')
      .unsigned()
      .notNullable()
      .defaultTo(30);
    table.integer('credit_charges').notNullable().defaultTo(2); 
    table
    .string('secretKey') 
     
    commonFields(knex, table);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('credit_table');
}
