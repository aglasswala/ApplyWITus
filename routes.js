const handler = require('./controllers/main')
const multer = require('multer')
const uploads = multer({ dest: 'uploads/' })
module.exports = router => {
	router.get('/', handler.homepage)

	router.post('/register', handler.registerUser)
	router.post('/login', handler.loginUser)

	router.post('/postJobs', handler.postJobs)
	router.post('/apply',uploads.single('file'), handler.apply)
}