describe('Example login', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('lets go', async () => {
    
    await waitFor(element(by.id('introScreen1$buttonDone'))).toBeVisible().withTimeout(10000);
    await element(by.id('introScreen1$buttonDone')).tap();
  });

  it('login', async () => {
    
    await waitFor(element(by.id('container11'))).toBeVisible().withTimeout(10000);
    await element(by.id('container11')).tap();
    
    await element(by.id('textBox3')).typeText('detox');
    await element(by.id('textBox4')).typeText('DetoxWins123!');
    
    await device.disableSynchronization()
    await element(by.id('actionButton2')).tap();
    

    // await device.enableSynchronization();
    await waitFor(element(by.id('text16'))).toBeVisible().withTimeout(10000);
    // await expect(element(by.id('text16'))).toBeVisible();
  });
});
