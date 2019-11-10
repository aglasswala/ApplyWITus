const multer = require('multer');
const path = require('path')

const handler = require('./controllers/main')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
	console.log(file.originalname)
    cb(null, file.originalname) //Appending extension
  }
})
const upload = multer({ storage: storage });
module.exports = router => {
	router.get('/', handler.homepage)

	router.post('/register', handler.registerUser)
	router.post('/login', handler.loginUser)

	router.post('/apply', upload.single('file'), handler.apply)
}