const { loginUser, registerUser } = require("./users/users")
const { postJobs } = require('./jobs/jobs')
const { apply } = require("./apply/apply")

module.exports = {
	homepage: (req, res) => {
		return res.status(200).send({
			"message": "this is the api homepage"
		})
	},
	loginUser,
	registerUser,
	postJobs,
	apply
}