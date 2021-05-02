const env = {
  database: 'd19it75c9j04j2',
  username: 'lxknzbbcpmmdyl',
  password: '3f1a281360fc9c4a5c42f35efeb94643064caa4293c74b136e885cc7c3d57beb',
  host: 'ec2-54-163-245-64.compute-1.amazonaws.com',
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