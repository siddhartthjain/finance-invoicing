import * as Knex from 'knex';
import { commonFields, id } from '../helper';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('delivery_details', function (table) {
    id(table);
    table
      .bigInteger('credit_customer_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('credit_customer');
    table.string('consignee_name');
    table.string('phone');
    table.string('address_line1');
    table.string('address_line2');
    table.string('landmark');
    table.string('city');
    table.string('state');
    table.string('country').defaultTo('India');
    table.integer('pin_code').unsigned();
    table.boolean('is_international').defaultTo(false);
    table
      .specificType('is_deleted', 'TINYINT(1)')
      .unsigned()
      .notNullable()
      .defaultTo(0);
    commonFields(knex, table);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('delivery_details');
}
