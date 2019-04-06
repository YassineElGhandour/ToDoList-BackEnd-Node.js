const ToDoListController = require('./controllers/ToDoListController')
 
module.exports = (app) => {

	app.post('/task/add', 
		ToDoListController.postlist)

	app.get('/tasks', 
		ToDoListController.getlist)
	
	app.put('/task/edit/:id', 
		ToDoListController.putlist) 

	app.delete('/task/delete/:id', 
		ToDoListController.deletelist) 

	app.get('/task/:id', 
		ToDoListController.viewtask) 
}