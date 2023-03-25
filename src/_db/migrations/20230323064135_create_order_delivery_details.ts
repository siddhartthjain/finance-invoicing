import * as Knex from 'knex';
import { commonFields, id } from '../helper';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    'fabric_order_delivery_address',
    function (table) {
      id(table);
      table.string('bill_to').notNullable();
      table
        .bigInteger('brand_address_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('brand_address');
      table.timestamp('estimated_delivery_date').notNullable();
      table.string('terms');
      commonFields(knex, table);
    },
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('order_delivery_details');
}
