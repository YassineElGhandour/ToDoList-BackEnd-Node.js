module.exports = {
	port : process.env.PORT || 8060,
	db : {
		database: process.env.DB_NAME || 'todolist',
		user: process.env.DB_USER || 'todolist',
		password: process.env.DB_PASS || 'todolist',
		options: {
			dialect: process.env.DIALECT || 'sqlite',
			host: process.env.HOST || 'todolist',
			storage: './todolist.sqlite'
		}
	}
}