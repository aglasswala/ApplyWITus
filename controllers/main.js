module.exports = {
	homepage: (req, res) => {
		return res.status(200).send({
			"message": "this is the api homepage"
		})
	}
}