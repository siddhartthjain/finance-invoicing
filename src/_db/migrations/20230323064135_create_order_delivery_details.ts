import * as Knex from 'knex';
import { commonFields, id } from '../helper';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('order_delivery_details', function (table) {
    id(table);
    table
      .bigInteger('delivery_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('delivery_details');
    table.string('bill_to').notNullable();
    table.timestamp('estimated_delivery_date').notNullable();
    table.string('terms');
    commonFields(knex, table);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('order_delivery_details');
}
