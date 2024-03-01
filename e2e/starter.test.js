describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

//   beforeEach(async () => {})

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
    
    await waitFor(element(by.id('text16'))).toBeVisible().withTimeout(15000);
    await device.enableSynchronization();

    await element(by.id('actionButton1')).tap();
    await element(by.id('listView1')).swipe('up', 'fast', 1);
    // await expect(element(by.id('text16'))).toBeVisible();
  });
})
