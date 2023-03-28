// import { table } from "console";
import * as Knex from "knex";
import { commonFields, id } from "../helper";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('credit_users', table=>{
        id(table);
        table.integer("user_id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users');
    // table.integer('brandId');  
        table.integer('credit_customer_id')
        .unsigned()
        .notNullable()
        .references("id")
        .inTable('credit_customer')

        commonFields(knex, table);
        
    })
}


export async function down(knex: Knex): Promise<void> {
}

