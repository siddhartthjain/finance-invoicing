import * as Knex from 'knex';
import { commonFields, id } from '../helper';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('products', function (table) {
    id(table);    // this is the main id such as lfi 0030
    table
      .bigInteger('credit_customer_id')
      .notNullable()
      .references('id')
      .inTable('credit_customer');
    table.integer('generated_product_id').notNullable();  //?
    table.string('product_name').notNullable();
    table.string('product_specification').notNullable();
    table.string('hsn_code').notNullable();
    commonFields(knex, table);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('products');
}
