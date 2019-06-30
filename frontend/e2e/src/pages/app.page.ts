import { browser, element, by } from 'protractor';

export interface IResponseRow {
  text: string;
  notes: number[];
}

export class AppPage {
  private inputElement = element(by.css('app-atm #cash-input'));
  private withdrawButtonElement = element(by.css('app-atm #withdraw-button'));

  private responseElement = element.all(by.css('app-atm .response-row'));
  private notesSelector = 'app-notes mat-chip';

  private snackbarElement = element(by.css('snack-bar-container'));

  navigateTo() {
    browser.get('/');
  }

  async withdraw(amount: number) {
    await this.inputElement.clear();
    await this.inputElement.sendKeys(amount);
    await this.withdrawButtonElement.click();
  }

  async getResults(): Promise<IResponseRow[]> {
    const isPresent = await this.responseElement.isPresent();
    if (!isPresent) {
      return null;
    }

    const results = await this.responseElement.map(row => ({
      text: row.getText(),
      notes: row
        .$$(this.notesSelector)
        .map(notes =>
          notes.getText().then(text => Number(text.replace('\'', '')))
        )
    }));

    return results as IResponseRow[];
  }

  async isSnackbarOpen(): Promise<boolean> {
    return this.snackbarElement.isPresent();
  }
}
