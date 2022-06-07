import chai from 'chai'
import playwright from 'playwright'
const assert = chai.assert

describe ('vikunja', () => {
    let page, context, browser
    beforeEach (async () => {
        browser = await playwright.chromium.launch(
             {
                headless : false,
                slowMo : 50
            }
        )
        context = await browser.newContext()
        page = await context.newPage()
        await page.goto('https://try.vikunja.io/login')

    it('Авторизация', async () => {
        await page.click('#username');
        await page.fill('#username', 'demo');
        await page.click('#password');
        await page.fill('#password', 'demo');
        await page.click('.is-primary');
        asserts.strictEqual(1,2,'a+b')
        })
    })
}) 