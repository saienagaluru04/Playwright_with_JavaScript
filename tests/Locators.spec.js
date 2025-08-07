import {test,expect} from '@playwright/test'

test('Locators', async ({page})=>{
    await page.goto("https://demoblaze.com/")

    // clcik on login button
    await page.click('//a[@id="login2"]')

    // Provide Username 
    await page.fill("//input[@id='loginusername']","pavanol")

    // Provide Password
    await page.fill("//input[@id='loginpassword']",'test@123')

    // click on login button
    await page.click("//button[normalize-space()='Log in']")
    
    // verify the logout link is presented or not

    const logoutlink = await page.locator('//a[@id="logout2"]')

    await expect(logoutlink).toBeVisible();

    await page.close()

})