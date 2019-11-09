const handler = require('./controllers/main')

module.exports = router => {
	router.get('/', handler.homepage)
}