const {Task} = require('../models')

module.exports = {

	async getlist(req, res){
		try{
			const tasks = await Task.findAll({limit: 10})
			
			res.send(tasks)
		}
		catch(err){
			res.status(500).send({
				error: err
			})
		}
	},

	async postlist(req, res){
		try{
			const task = await Task.create(req.body)
			res.send(task)
		}
		catch(err){
			res.status(500).send({
				error: 'POST : 500 internal Error'
			})
		}
	},

	async deletelist(req, res){
		try{
			const id = parseInt(req.params.id)
			const success = await Task.delete(id)
			
			res.status(204).end();
		}
		catch(err){
			res.status(500).send({
				error: 'DELETE : 500 internal Error'
			})

		}
	},

	async putlist(req, res){
		try{
			const success = await Task.update(req.body,
			{
				where:{
					id: req.params.id
				}
			})
			res.send(req.body)
		}
		catch(err){
			res.status(500).send({
				error: 'PUT : 500 internal Error'
			})
		}
	},

	async viewtask(req, res){
		try{
			const tasks = await Task.findById(
				req.params.id)
			res.send(tasks)
		}
		catch(err){
			res.status(500).send({
				error: 'GET : 500 internal Error'
			})
		}
	},

}