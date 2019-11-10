const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) //Appending extension
  }
})

const upload = multer({ storage: storage });
const handler = require('./controllers/main')

module.exports = router => {
	router.get('/', handler.homepage)

	router.post('/register', handler.registerUser)
	router.post('/login', handler.loginUser)

	router.post('/apply', upload.single('file'), handler.apply)
}