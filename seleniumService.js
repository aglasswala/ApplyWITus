const chrome = require('selenium-webdriver/chrome');
const {Builder, By} = require('selenium-webdriver');

require('chromedriver');
module.exports = {
        startSelenium: async (body) => {
        console.log(body)
        let driver = await new Builder()
        .forBrowser('chrome')
        // .setChromeOptions(new chrome.Options().headless())
        .build();
            await driver.get("https://talentwwinc.applytojob.com/apply/QCBrTbdxGv/");
            await driver.findElement(By.id("resumator-firstname-value"))
            .then( result => {
                result.sendKeys(body.firstName);
            })
            .catch(err =>{
                console.log(err);
            })
            await driver.findElement(By.id("resumator-lastname-value"))
            .then( result => {
                result.sendKeys(body.lastName);
                
            })
            .catch(err =>{
                console.log(err);
            })
            await driver.findElement(By.id("resumator-email-value"))
            .then( result => {
                result.sendKeys(body.email);
            })
            .catch(err =>{
                console.log(err);
            })
            await driver.findElement(By.id("resumator-phone-value"))
            .then( result => {
                result.sendKeys(body.phone);
            })
            .catch(err =>{
                console.log(err);
            })
            await driver.findElement(By.id("resumator-choose-upload"))
            .then( result => {
                result.click();
            })
            .catch(err =>{
                console.log(err);
            })
            await driver.findElement(By.id("resumator-resume-value"))
            .then( result => {
                result.sendKeys("C:\\SampleResume.pdf");
            })
            .catch(err =>{
                console.log(err);
            })
            // await driver.findElement(By.id("resumator-submit-resume"))
            // .then( (result) => {
            //     return result.click();
            // })
            // .catch(err =>{
            //     console.log(err);
            // })
            // driver.close();
    }
}
