import * as Knex from 'knex';
import { id } from '../helper';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('order_dispatch', function (table) {
    id(table);
    table
      .bigInteger('order_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('orders');
    table.decimal('quantity', 12, 2);
    table.timestamp('dispatch_date').notNullable();
    // 1- For self pickup
    table.specificType('delivery_type', 'TINYINT(1)').unsigned().defaultTo(1);
    table
      .bigInteger('delivery_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('order_delivery_details');
  });
}

export async function down(knex: Knex): Promise<void> {}
