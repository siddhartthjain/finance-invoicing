// mapping of cutomer and supplier only but where is prod id

import * as Knex from 'knex';
import { id } from '../helper';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('mappings', function (table) {
    id(table);
    table
      .bigInteger('user_id')
      .notNullable()
      .references('id')
      .inTable('users');
    /*
      need to change the refrence to the locoroot if
      adding suppliers to the locofastroot too
      */
    table
      .bigInteger('supplier_id')
      .notNullable()
      .references('id')
      .inTable('suppliers');
    table
       .bigInteger('prod_id')
       .unsigned()
       .references('id')
       .inTable('products')  

    table
      .timestamp('created_on')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table
      .timestamp('modified_on')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('mappings');
}
