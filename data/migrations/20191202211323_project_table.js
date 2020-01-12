exports.up = function(knex) {
        return knex.schema
        .createTable("projects", tbl => {
            tbl.increments("id");
            tbl.string("project_name").notNullable();
            tbl.string("description");
            tbl.int("completed").notNullable();
        })
        .createTable("tasks", tbl => {
            tbl.increments("id");
        })
        .createTable("resources", tbl => {
            tbl.increments("id");
            tbl
            .string("name")
            .unique()
            .notNullable();
            tbl.string("description");
        })
        .createTable("projects_resources", tbl => {
            tbl
            .int("project_id")
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE");
            tbl
            .int("resource_id")
            .references("id")
            .inTable("resources")
            .onUpdate("CASCADE");
        });
    };
    
    exports.down = function(knex) {
        return knex.schema
        .dropTableIfExists("projects_resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("projects");
};