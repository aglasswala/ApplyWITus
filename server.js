const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.status(200).send({
		"yes": "yes"
	})
})

app.listen(3001, () => {
	console.log(`let's get it motherfucker, we live on ${3001}`)
})