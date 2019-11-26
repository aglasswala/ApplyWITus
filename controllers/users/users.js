const { hashPassword } = require("../../utils/utils")
const userService = require("../../services/users")
const { createJwt } = require("../../auth/auth")

module.exports = {
	loginUser: (req, res) => {
		const { email, password } = req.body

		return userService.login(email, password)
				.then(result => {
					const token = createJwt(result.userid)

					return res.status(200).send({ result: "success", token: token })
				})
				.catch(err => res.status(404).send({ err: err }))
	},
	registerUser: (req, res) => {
		const { email, password, repassword } = req.body
		const pass = hashPassword(password)

		return userService.register(email, pass)
				.then(result => res.status(200).send({ result }))
				.catch(err => res.status(400).send({ err }))
	}
}