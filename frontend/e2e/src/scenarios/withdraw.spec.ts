import { AppPage } from '../pages/app.page';

describe('App', () => {
  let appPage: AppPage;

  beforeEach(async () => {
    appPage = new AppPage();
    await appPage.navigateTo();
  });

  it('should withdraw correct amount', async () => {
    let results = await appPage.getResults();
    expect(results).toBeNull();
    expect(await appPage.isSnackbarOpen()).toBeFalsy();

    let amount = 180;

    await appPage.withdraw(amount);

    results = await appPage.getResults();

    expect(results).toBeDefined();
    expect(results.length).toEqual(1);
    expect(results[0].text).toContain(String(amount));
    expect(results[0].notes).toEqual([100, 50, 20, 10]);
    expect(await appPage.isSnackbarOpen()).toBeFalsy();

    amount = 220;

    await appPage.withdraw(amount);

    results = await appPage.getResults();

    expect(results).toBeDefined();
    expect(results.length).toEqual(2);
    expect(results[1].text).toContain(String(amount));
    expect(results[1].notes).toEqual([100, 100, 20]);
    expect(await appPage.isSnackbarOpen()).toBeFalsy();
  });

  it('should show error for the amount not available to withdraw', async () => {
    let results = await appPage.getResults();
    expect(results).toBeNull();

    const amount = 23;

    await appPage.withdraw(amount);

    results = await appPage.getResults();
    expect(results).toBeNull();
    expect(await appPage.isSnackbarOpen()).toBeTruthy();
  });
});
