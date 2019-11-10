const { loginUser, registerUser } = require("./users/users")
<<<<<<< HEAD
const { postJobs } = require('./jobs/jobs')
=======
const { apply } = require("./apply/apply")
>>>>>>> fcce3cc170bbd344bedb57c2978a23e95db2da42

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