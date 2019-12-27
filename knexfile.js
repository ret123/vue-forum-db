// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      database: 'vue_forum'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }


};