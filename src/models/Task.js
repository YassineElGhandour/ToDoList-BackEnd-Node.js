module.exports = (sequelize, DataTypes) => {
	const Task = 
	sequelize.define('Task', {
		title: DataTypes.STRING,
		author: DataTypes.STRING,
		task : DataTypes.TEXT,
		checked : DataTypes.INTEGER
	})

	return Task
}