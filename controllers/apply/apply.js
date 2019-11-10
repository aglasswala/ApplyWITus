const jobService = require("../../services/jobs")

module.exports = {
	apply: (req, res) => {
		const { firstName, lastName, email, phoneNumber } = req.body

		return jobService.apply(firstName, lastName, email, phoneNumber)	
						.then(result => {
							console.log(result)
							return res.status(200).send({ result })
						})
						.catch(err => {
							console.log(err)
							return res.status(400).send({ err })
						})
	}
}