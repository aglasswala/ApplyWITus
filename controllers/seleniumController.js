const seleniumService = require('../seleniumService')

module.exports = {
	startSelenium: (req, res) => {
        return seleniumService.startSelenium(req.body)
	}
}