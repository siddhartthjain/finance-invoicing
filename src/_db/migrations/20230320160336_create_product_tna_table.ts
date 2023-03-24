import * as Knex from 'knex';
import { id } from '../helper';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('product_tna', function (table) {
    id(table);
    table
      .bigInteger('product_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('products');
    table
     .integer('status')
     .unsigned()
     .references('status')
     .inTable('orders')
  });
}

export async function down(knex: Knex): Promise<void> {}
