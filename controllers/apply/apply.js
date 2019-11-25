const jobService = require("../../services/jobs")

module.exports = {
	apply: (req, res) => {
		const { firstName, lastName, email, phoneNumber, path } = req.body

		const dirname = __dirname.substring(0, 58) + "/uploads/" + req.file.originalname 

		return jobService.apply(firstName, lastName, email, phoneNumber, dirname)	
						.then(result => {
							console.log(result)
							return res.status(200).send({ "result": "yes" })
						})
						.catch(err => {
							console.log(err)
							return res.status(400).send({ err })
						})
	}
}