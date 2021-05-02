const env = {
  database: 'd2p01d5em5jcbj',
  username: 'ektwseouqsljwm',
  password: '4314e96456da716a703491362d2c8eb192c99e7ce87c3ca9ba1d1a9b89b8f73a',
  host: 'ec2-54-164-238-108.compute-1.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
 
module.exports = env;