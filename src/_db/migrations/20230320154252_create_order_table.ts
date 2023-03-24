import * as Knex from 'knex';
import { commonFields, id } from '../helper';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('orders', function (table) {
    id(table);
    table
      .bigInteger('customer_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('locofastroot');
    // maybe need to change to locofast root
    table
      .bigInteger('supplier_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('suppliers');
    table
      .bigInteger('product_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('products');
    table
      .bigInteger('delivery_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('order_delivery_details');
    // 1-Provisional(verification-pending) , 2-Created(PO raised) , 3- Dispatched , 4-Delivered ,5-Cancelled
    table.specificType('status', 'TINYINT(1)').notNullable().defaultTo(1);
    table.decimal('quantity', 12, 2).notNullable();
    // price that will be used to calculate the original price (paid to supplier)
    table.decimal('procurement_price', 12, 2).notNullable();
    // price after interest (paid by customer)
    table.decimal('final_price', 12, 2).notNullable();
    // by supplier
    table.boolean('marked_delivered').defaultTo(0);
    // by customer
    table.boolean('marked_received').defaultTo(0);
    table
      .bigInteger('unit_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('units');
    commonFields(knex, table);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('orders');
}
