describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('lets goooo', async () => {
    
    await waitFor(element(by.id('introScreen1$buttonDone'))).toBeVisible().withTimeout(10000);
    try {
      await element(by.id('introScreen1$buttonDone')).tap();
    } catch (e) {
      console.log(e)
    }
  });

  it('login', async () => {
    
    await waitFor(element(by.id('container11'))).toBeVisible().withTimeout(10000);
    try {
      await element(by.id('container11')).tap();
      await element(by.id('textBox3')).typeText('demo');
      await element(by.id('textBox4')).typeText('demo');
    } catch (e) {
      console.log(e)
    }
  });
});
