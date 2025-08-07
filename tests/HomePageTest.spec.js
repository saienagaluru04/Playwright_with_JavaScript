// test package is used for writing the test and expext package is used for validating the test.
const {test, expect} = require ('@playwright/test');

// Test block, async is used for giving a promise of not perform async
test('Home page',async ({page})=>{ 

   //  Launching the web app
   await page.goto('https://www.demoblaze.com/index.html');

   //  capturing the title
   const pageTitle = page.title()

   //  printing the title in the console   
   console.log('Page Title is : ',pageTitle);

    //  For validating the Title 
    await expect(page).toHaveTitle('STORE');

    const pageURL = page.url();
    console.log('Page URL is: ',pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
     
    // Closing the page
    await page.close();

})