module.exports = {
  development: {
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {
          filename: './data.sqlite3',
      },
      migrations: {
          directory: './data/migrations',
          tableName: 'dbmigrations',
      }
  }
}
