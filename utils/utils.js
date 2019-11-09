const bcrypt = require("bcrypt")

const hashPassword = password => bcrypt.hashSync(password, 10)

const compareHash = (original, hash) => bcrypt.compareSync(original, hash)

module.exports = {
	hashPassword,
	compareHash
}