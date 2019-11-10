const handler = require('./controllers/main')

module.exports = router => {
	router.get('/', handler.homepage)

	router.post('/register', handler.registerUser)
	router.post('/login', handler.loginUser)

	router.post('/apply', handler.apply)
}