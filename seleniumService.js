const chrome = require('selenium-webdriver/chrome');
const {Builder, By} = require('selenium-webdriver');
require('chromedriver');
async function example() {
    let driver = await new Builder()
    .forBrowser('chrome')
    // .setChromeOptions(new chrome.Options().headless())
    .build();
        await driver.get("https://talentwwinc.applytojob.com/apply/QCBrTbdxGv/");
        await driver.findElement(By.id("resumator-firstname-value"))
        .then( result => {
            result.sendKeys("Mark");
        })
        .catch(err =>{
            console.log(err);
        })
        await driver.findElement(By.id("resumator-lastname-value"))
        .then( result => {
            result.sendKeys("Karls");
            
        })
        .catch(err =>{
            console.log(err);
        })
        await driver.findElement(By.id("resumator-email-value"))
        .then( result => {
            result.sendKeys("d345215@urhen.com");
        })
        .catch(err =>{
            console.log(err);
        })
        await driver.findElement(By.id("resumator-phone-value"))
        .then( result => {
            result.sendKeys("123456789");
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
        await driver.findElement(By.id("resumator-submit-resume"))
        .then( (result) => {
            return result.click();
        })
        .catch(err =>{
            console.log(err);
        })
        // driver.close();
}
example();