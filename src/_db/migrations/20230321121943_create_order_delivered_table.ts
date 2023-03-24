import * as Knex from 'knex';
import { commonFields, id } from '../helper';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('order_delivered', function (table) {
    id(table);
    table
      .bigInteger('order_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('orders');
    table.timestamp('delivered_date').notNullable();
    commonFields(knex, table);
  });
}

export async function down(knex: Knex): Promise<void> {}
