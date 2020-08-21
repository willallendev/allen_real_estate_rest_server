
module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      password: '1234',
      database: 'allen_real_estates',
    },
  },
  test: {
    client: 'pg',
    connection: {
      user: 'postgres',
      password: '1234',
      database: 'test_allen_real_estates',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
