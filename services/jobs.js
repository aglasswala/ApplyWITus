const chrome = require('selenium-webdriver/chrome');
const {Builder, By} = require('selenium-webdriver');
require('chromedriver')
module.exports = {
	apply: (firstName, lastName, email, phoneNumber, path) => new Promise(async (resolve, reject) => {
		let driver = await new Builder() .forBrowser('chrome')
		  // .setChromeOptions(new chrome.Options().headless())
		  .build()

	      await driver.get("https://talentwwinc.applytojob.com/apply/QCBrTbdxGv/")
	      await driver.findElement(By.id("resumator-firstname-value"))
	      .then( result => {
	          result.sendKeys(firstName)
	      })
	      .catch(err =>{
	          console.log(err)
	          return reject(err)
	      })
	      await driver.findElement(By.id("resumator-lastname-value"))
	      .then( result => {
	          result.sendKeys(lastName)
	      })
	      .catch(err =>{
	          console.log(err)
	          return reject(err)
	      })
	      await driver.findElement(By.id("resumator-email-value"))
	      .then( result => {
	          result.sendKeys(email)
	      })
	      .catch(err =>{
	          console.log(err)
	          return reject(err)
	      })
	      await driver.findElement(By.id("resumator-phone-value"))
	      .then( result => {
	          result.sendKeys(phoneNumber)
	      })
	      .catch(err =>{
	          console.log(err)
	          return reject(err)
	      })
	      await driver.findElement(By.id("resumator-choose-upload"))
	      .then( result => {
	          result.click()
	      })
	      .catch(err =>{
	          console.log(err)
	          return reject(err)
	      })
	      await driver.findElement(By.id("resumator-resume-value"))
	      .then( result => {
	          result.sendKeys(path)
	          return resolve("YES MF")
	      })
	      .catch(err =>{
	          console.log(err)
	          return reject(err)
	      })
	})
}