import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("points", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.decimal("latitude").notNullable();
    table.decimal("longitude").notNullable();
    table.decimal("number").notNullable();
    table.string("city").notNullable();
    table.string("uf").notNullable();

    table.integer("user_id").notNullable().references("id").inTable("users");

    table.integer("item_id").notNullable().references("id").inTable("items");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("points");
}
