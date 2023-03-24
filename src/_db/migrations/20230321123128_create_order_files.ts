import * as Knex from 'knex';
import { commonFields, id } from '../helper';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('order_files', function (table) {
    id(table);
    table
      .bigInteger('order_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('orders');
    // 1- Order Dispatched Files , 2- Order Delivered Files
    table.specificType('file_type', 'TINYINT(1)');

    table
      .bigInteger('file_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('files'); // need to make this file schema
    commonFields(knex, table);
  });
}

export async function down(knex: Knex): Promise<void> {}
