const {test, expect} = require('@playwright/test')

test('AddrtionsTest',async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    // expect(page).toHaveURL  -- page has url
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // expect(page).toHaveTitle  -- page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // expect(locator).toBeVisible() -- Element is visible
    const logoElement = await page.locator('//img[@alt="nopCommerce demo store"]')
    await expect(logoElement).toBeVisible()

    // expect(locator).toBeEnabled() -- Control is enabled 
    const searchBox = await page.locator('#small-searchterms')
    await expect(searchBox).toBeEnabled()

    // expect(locator).toBeChecked()  -- Radio/Checkbox is checked 

    // radio button
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()  //select radio button
    await expect(maleRadioButton).toBeChecked()

    // check box
    const newsLetterCheckBox = await page.locator('#Newsletter')
    await expect(newsLetterCheckBox).toBeChecked()

    // expect(locator).toHaveAttribute() Element has attribute
    const regButton = await page.locator('')
    await expect(regButton).toHaveAttribute('type','submit')

    // expect(locator).toHavetext()  -- Element matches text


    // expect (locator).toContainText()  -- Element contains text


})