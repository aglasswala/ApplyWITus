const handler = require('./controllers/main')
const selhandler = require('./controllers/seleniumController')
module.exports = router => {
	router.get('/', handler.homepage)

	router.post('/register', handler.registerUser)
	router.post('/login', handler.loginUser)
	router.post('/applyJob', selhandler.startSelenium)
}